import Link from "next/link";
import { buildRecipePath } from "@/lib/paths";
import type { RecipeReference } from "@/lib/recipes";

export function ReferenceList({ references }: { references: RecipeReference[] }) {
  if (!references.length) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm">
      <h2 className="font-serif text-xl text-brand-dark">参考菜谱</h2>
      <ul className="mt-4 space-y-2 text-sm text-brand-dark/80">
        {references.map((reference) => (
          <li key={`${reference.category}/${reference.slug}`}>
            <Link
              href={buildRecipePath(reference.category, reference.slug)}
              className="inline-flex items-center gap-2 text-brand-green hover:underline"
            >
              {reference.title}
              <span className="text-xs text-brand-muted">{reference.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
