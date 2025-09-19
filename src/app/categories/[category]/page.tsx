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
    };
  }
  return {
    title: `${categoryData.title} 菜谱 · 像老乡鸡那样做饭`,
    description: `${categoryData.title} 菜谱合集。`,
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

  return (
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
  );
}
