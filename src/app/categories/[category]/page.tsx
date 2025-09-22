import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryRecipeGrid } from "@/components/category-recipe-grid";
import { getCategories, getRecipe } from "@/lib/recipes";

export function generateStaticParams() {
  return getCategories().map((category) => ({
    category: category.slug,
  }));
}

type RouteParams = Promise<{ category: string }>;

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  const { category } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const categoryData = getCategories().find((item) => item.slug === normalizedCategory);
  if (!categoryData) {
    return {
      title: "未找到分类",
      description: "抱歉，您访问的分类页面不存在。",
    };
  }

  const recipeCount = categoryData.recipes.length;
  const description = `${categoryData.title}菜谱大全，共收录${recipeCount}道经典${categoryData.title}。包含详细的制作步骤和配料说明，让您轻松掌握${categoryData.title}的烹饪技巧，在家也能做出老乡鸡风味的${categoryData.title}。`;

  return {
    title: `${categoryData.title}菜谱`,
    description,
    keywords: [`${categoryData.title}菜谱`, `${categoryData.title}做法`, `${categoryData.title}家常做法`, "中式菜谱", "家常菜"],
    openGraph: {
      title: `${categoryData.title}菜谱 - 美食菜谱网`,
      description,
      type: "website",
      locale: "zh_CN",
    },
    twitter: {
      card: "summary",
      title: `${categoryData.title}菜谱 - 美食菜谱网`,
      description,
    },
    alternates: {
      canonical: `/categories/${categoryData.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: RouteParams;
}) {
  const { category } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const categoryData = getCategories().find((item) => item.slug === normalizedCategory);
  if (!categoryData) {
    notFound();
  }

  const recipes = categoryData.recipes
    .map((summary) => getRecipe(categoryData.slug, summary.slug))
    .filter((recipe): recipe is NonNullable<typeof recipe> => Boolean(recipe));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://recipe.bazinga.ink"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "菜系分类",
        "item": "https://recipe.bazinga.ink/categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${categoryData.title}菜谱`,
        "item": `https://recipe.bazinga.ink/categories/${categoryData.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <header className="space-y-3">
          <p className="text-sm font-medium text-brand-muted">菜系</p>
          <h1 className="font-serif text-4xl text-brand-dark">{categoryData.title}</h1>
          <p className="max-w-2xl text-sm text-brand-dark/70">
            当前分类共收录 {recipes.length} 道菜。下方按照文档顺序展示，点击标题查看详情。
          </p>
        </header>

        <CategoryRecipeGrid recipes={recipes} />
      </div>
    </>
  );
}
