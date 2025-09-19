import Link from "next/link";
import { buildRecipePath } from "@/lib/paths";
import type { Recipe } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const previewText = recipe.description || recipe.steps[0] || recipe.ingredients[0] || "这道菜谱尚未补充描述";

  return (
    <article className="group flex h-full flex-col items-center gap-6 rounded-2xl border border-brand-dark/10 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-sm font-medium text-brand-green">
        {recipe.category.slice(0, 2)}
      </div>
      <div className="space-y-3">
        <Link href={buildRecipePath(recipe.category, recipe.slug)} className="font-serif text-2xl text-brand-dark">
          {recipe.title}
        </Link>
        <p className="line-clamp-3 text-sm text-brand-dark/70">{previewText}</p>
      </div>
      <div className="flex w-full items-center justify-center gap-6 rounded-full bg-brand-cream/70 px-4 py-2 text-xs text-brand-muted">
        <span>配料 {recipe.ingredients.length || "-"}</span>
        <span>步骤 {recipe.steps.length || "-"}</span>
      </div>
    </article>
  );
}
