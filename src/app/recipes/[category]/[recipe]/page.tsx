import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReferenceList } from "@/components/reference-list";
import { RecipeDetail } from "@/components/recipe-detail";
import { getAllRecipes, getRecipe } from "@/lib/recipes";

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({
    category: recipe.category,
    recipe: recipe.slug,
  }));
}

type RecipeRouteParams = Promise<{ category: string; recipe: string }>;

export async function generateMetadata({
  params,
}: {
  params: RecipeRouteParams;
}): Promise<Metadata> {
  const { category, recipe } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const normalizedSlug = decodeURIComponent(recipe);
  const recipeData = getRecipe(normalizedCategory, normalizedSlug);
  if (!recipeData) {
    return {
      title: "未找到菜谱",
    };
  }
  return {
    title: `${recipeData.title} · ${recipeData.category}`,
    description: `${recipeData.title} 的配料与步骤说明。`,
  };
}

export default async function RecipePage({
  params,
}: {
  params: RecipeRouteParams;
}) {
  const { category, recipe } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const normalizedSlug = decodeURIComponent(recipe);
  const recipeData = getRecipe(normalizedCategory, normalizedSlug);
  if (!recipeData) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <RecipeDetail recipe={recipeData} />
      <div className="mx-auto max-w-4xl px-6 pb-12">
        <ReferenceList references={recipeData.references} />
      </div>
    </div>
  );
}
