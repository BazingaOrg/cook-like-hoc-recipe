import { RecipeCard } from "@/components/recipe-card";
import type { Recipe } from "@/lib/recipes";

export function CategoryRecipeGrid({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={`${recipe.category}/${recipe.slug}`} recipe={recipe} />
      ))}
    </div>
  );
}
