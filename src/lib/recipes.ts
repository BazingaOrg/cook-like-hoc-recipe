import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type RecipeReference = {
  title: string;
  category: string;
  slug: string;
};

export type RecipeSection = {
  title: string;
  markdown: string;
  lines: string[];
};

export type Recipe = {
  title: string;
  category: string;
  slug: string;
  path: string;
  description: string;
  ingredients: string[];
  steps: string[];
  notes: RecipeSection[];
  references: RecipeReference[];
  metadata: Record<string, unknown>;
};

export type RecipeSummary = {
  title: string;
  category: string;
  slug: string;
};

export type Category = {
  title: string;
  slug: string;
  recipes: RecipeSummary[];
};

export type SiteIndex = {
  hero?: unknown;
  features?: unknown;
  metadata: Record<string, unknown>;
};

const RECIPES_ROOT = path.join(process.cwd(), 'content', 'recipes');

const INGREDIENT_SECTION_TITLES = ['配料', '原料', '材料', '食材', '调料'];
const STEP_SECTION_TITLES = ['步骤', '做法', '制作', '制法', '操作'];

let recipeCache: Recipe[] | null = null;
let categoryCache: Category[] | null = null;
let siteIndexCache: SiteIndex | null = null;

function assertContentDir() {
  if (!fs.existsSync(RECIPES_ROOT)) {
    throw new Error(`Recipes directory not found at ${RECIPES_ROOT}`);
  }
}

type RawSection = {
  title: string;
  lines: string[];
};

type ParsedRecipe = {
  title: string;
  description: string;
  sections: RawSection[];
  metadata: Record<string, unknown>;
  references: RecipeReference[];
};

function normalizeSectionTitle(title: string): string {
  return title.replace(/[:：\s]+$/, '').trim();
}

function parseRecipeMarkdown(content: string): ParsedRecipe {
  const { content: body, data } = matter(content);
  const lines = body.split(/\r?\n/);

  let title = (data.title as string | undefined) ?? '';
  const descriptionLines: string[] = [];
  const sections: RawSection[] = [];
  let current: RawSection | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    const heading1 = line.match(/^#\s+(.+)$/);
    if (heading1) {
      title = title || heading1[1].trim();
      continue;
    }

    const heading2 = line.match(/^##\s*(.+)$/);
    if (heading2) {
      if (current) {
        sections.push(current);
      }
      current = {
        title: normalizeSectionTitle(heading2[1]),
        lines: [],
      };
      continue;
    }

    if (!current) {
      descriptionLines.push(line);
    } else {
      current.lines.push(line);
    }
  }

  if (current) {
    sections.push(current);
  }

  const description = descriptionLines
    .map((item) => item.trim())
    .filter(Boolean)
    .join('\n');

  const referenceMatches = [...body.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)]
    .map((match) => {
      const [, label, link] = match;
      if (!link.endsWith('.md')) {
        return null;
      }
      let cleaned = link;
      if (cleaned.startsWith('./')) {
        cleaned = cleaned.slice(2);
      }
      if (cleaned.startsWith('/')) {
        cleaned = cleaned.slice(1);
      }
      cleaned = cleaned.replace(/\.md$/, '');
      const decoded = decodeURIComponent(cleaned);
      const [category, ...rest] = decoded.split('/');
      const slug = rest.join('/') || category;
      if (!category || !slug) {
        return null;
      }
      return {
        title: label.trim(),
        category,
        slug,
      } satisfies RecipeReference;
    })
    .filter((item): item is RecipeReference => Boolean(item));

  const uniqueReferences: RecipeReference[] = [];
  for (const ref of referenceMatches) {
    if (!uniqueReferences.some((existing) => existing.category === ref.category && existing.slug === ref.slug)) {
      uniqueReferences.push(ref);
    }
  }

  return {
    title: title.trim(),
    description,
    sections,
    metadata: data,
    references: uniqueReferences,
  };
}

function sanitizeLine(line: string): string {
  return line
    .replace(/^[-*+]\s*/, '')
    .replace(/^\d+\.\s*/, '')
    .replace(/^-\s*\d+\.\s*/, '')
    .replace(/^[-*+]\s*/, '')
    .trim();
}

function extractList(lines: string[]): string[] {
  return lines
    .map((line) => sanitizeLine(line))
    .filter(Boolean);
}

function loadRecipeFile(category: string, fileName: string): Recipe {
  const slug = fileName.replace(/\.md$/, '');
  const filePath = path.join(RECIPES_ROOT, category, fileName);
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseRecipeMarkdown(content);

  const ingredientsSections = parsed.sections.filter((section) =>
    INGREDIENT_SECTION_TITLES.some((keyword) => section.title.includes(keyword)),
  );
  const stepSections = parsed.sections.filter((section) =>
    STEP_SECTION_TITLES.some((keyword) => section.title.includes(keyword)),
  );

  const ingredients = ingredientsSections.flatMap((section) => extractList(section.lines));
  const steps = stepSections.flatMap((section) => extractList(section.lines));

  const noteSections = parsed.sections.filter(
    (section) =>
      !INGREDIENT_SECTION_TITLES.some((keyword) => section.title.includes(keyword)) &&
      !STEP_SECTION_TITLES.some((keyword) => section.title.includes(keyword)),
  );

  const notes: RecipeSection[] = noteSections.map((section) => ({
    title: section.title,
    markdown: section.lines.join('\n').trim(),
    lines: section.lines.filter((line) => line.trim().length > 0),
  }));

  return {
    title: parsed.title || slug,
    category,
    slug,
    path: filePath,
    description: parsed.description,
    ingredients,
    steps,
    notes,
    references: parsed.references,
    metadata: parsed.metadata,
  };
}

function loadCategoryDirectory(): Category[] {
  assertContentDir();
  const entries = fs.readdirSync(RECIPES_ROOT, { withFileTypes: true });
  const categories = entries
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  return categories.map((categoryName) => {
    const categoryPath = path.join(RECIPES_ROOT, categoryName);
    const files = fs.readdirSync(categoryPath);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const readmePath = path.join(categoryPath, 'README.md');
    let orderedSlugs: RecipeSummary[] = [];
    if (fs.existsSync(readmePath)) {
      const readmeContent = fs.readFileSync(readmePath, 'utf-8');
      orderedSlugs = readmeContent
        .split(/\r?\n/)
        .map((line) => line.trim())
        .map((line) => {
          const match = line.match(/\[(.+?)\]\(\.\/(.+?)\)/);
          if (!match) return null;
          const [, title, link] = match;
          const decoded = decodeURIComponent(link);
          const slug = decoded.replace(/\.md$/, '');
          return {
            title: title.trim(),
            category: categoryName,
            slug,
          } satisfies RecipeSummary;
        })
        .filter((item): item is RecipeSummary => Boolean(item));
    }

    const explicitSlugs = new Set(orderedSlugs.map((item) => item.slug));

    const remaining = markdownFiles
      .filter((file) => file !== 'README.md')
      .map((file) => file.replace(/\.md$/, ''))
      .filter((slug) => !explicitSlugs.has(slug))
      .map((slug) => ({
        title: slug,
        category: categoryName,
        slug,
      }));

    return {
      title: categoryName,
      slug: categoryName,
      recipes: [...orderedSlugs, ...remaining],
    } satisfies Category;
  });
}

function loadAllRecipes(): Recipe[] {
  assertContentDir();
  const categories = loadCategoryDirectory();
  const recipeList: Recipe[] = [];

  for (const category of categories) {
    const categoryPath = path.join(RECIPES_ROOT, category.slug);
    const files = fs.readdirSync(categoryPath);
    const markdownFiles = files.filter((file) => file.endsWith('.md') && file !== 'README.md');
    for (const fileName of markdownFiles) {
      const recipe = loadRecipeFile(category.slug, fileName);
      recipeList.push(recipe);
    }
  }

  return recipeList;
}

function loadSiteIndex(): SiteIndex {
  assertContentDir();
  const indexPath = path.join(RECIPES_ROOT, 'index.md');
  if (!fs.existsSync(indexPath)) {
    return {
      metadata: {},
    };
  }
  const { data } = matter(fs.readFileSync(indexPath, 'utf-8'));
  const { hero, features, ...rest } = data as Record<string, unknown>;
  return {
    hero,
    features,
    metadata: rest,
  };
}

export function getAllRecipes(): Recipe[] {
  if (!recipeCache) {
    recipeCache = loadAllRecipes();
  }
  return recipeCache;
}

export function getRecipe(category: string, slug: string): Recipe | undefined {
  return getAllRecipes().find((recipe) => recipe.category === category && recipe.slug === slug);
}

export function getCategories(): Category[] {
  if (!categoryCache) {
    categoryCache = loadCategoryDirectory();
  }
  return categoryCache;
}

export function getSiteConfig(): SiteIndex {
  if (!siteIndexCache) {
    siteIndexCache = loadSiteIndex();
  }
  return siteIndexCache;
}

export function getRecipesByCategory(category: string): RecipeSummary[] {
  const match = getCategories().find((item) => item.slug === category);
  if (!match) {
    return [];
  }
  return match.recipes;
}
