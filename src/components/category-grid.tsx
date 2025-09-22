import Link from "next/link";
import { buildCategoryPath } from "@/lib/paths";
import type { Category } from "@/lib/recipes";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={buildCategoryPath(category.slug)}
          className="group flex h-full flex-col items-center gap-6 rounded-2xl border border-brand-dark/10 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10 text-3xl font-semibold text-brand-green">
            {category.title.slice(0, 1)}
          </div>
          <div className="space-y-2">
            <p className="font-serif text-2xl text-brand-dark">{category.title}</p>
            <p className="text-sm text-brand-muted/80">{category.recipes.length} 道菜谱</p>
          </div>
          <span className="text-xs font-medium text-brand-green/80 transition group-hover:text-brand-green">
            查看菜谱
          </span>
        </Link>
      ))}
    </div>
  );
}
