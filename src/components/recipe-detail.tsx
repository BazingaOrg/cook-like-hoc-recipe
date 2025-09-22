import type { Recipe } from "@/lib/recipes";

function renderLines(lines: string[]) {
  const listLines = lines.filter((line) => /^[-*+\d]/.test(line.trim()));
  const plainLines = lines.filter((line) => !/^[-*+\d]/.test(line.trim()));

  if (listLines.length === lines.length) {
    return (
      <ul className="space-y-2 text-sm text-brand-dark/80">
        {listLines.map((line, index) => (
          <li key={`${line}-${index}`}>{line.replace(/^[-*+]?\s*/, '')}</li>
        ))}
      </ul>
    );
  }

  return plainLines.map((line, index) => (
    <p key={`${line}-${index}`} className="text-sm text-brand-dark/80">
      {line.trim()}
    </p>
  ));
}

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <article className="mx-auto max-w-4xl space-y-8 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm font-medium text-brand-muted">{recipe.category}</p>
        <h1 className="font-serif text-4xl text-brand-dark">{recipe.title}</h1>
        {recipe.description ? (
          <p className="max-w-2xl text-base text-brand-dark/80">
            {recipe.description}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-4 text-xs text-brand-muted">
          <span>配料 {recipe.ingredients.length || 0} 项</span>
          <span>步骤 {recipe.steps.length || 0} 步</span>
        </div>
      </header>

      {recipe.ingredients.length ? (
        <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brand-dark">配料</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-dark/80">
            {recipe.ingredients.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {recipe.steps.length ? (
        <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brand-dark">步骤</h2>
          <ol className="mt-4 space-y-3 text-sm text-brand-dark/80">
            {recipe.steps.map((step, index) => (
              <li key={`${index}-${step}`} className="flex gap-4">
                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-brand-green/10 text-center font-semibold text-brand-green">
                  {index + 1}
                </span>
                <span className="flex-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {recipe.notes.map((section) => (
        <section
          key={section.title}
          className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm"
        >
          <h2 className="font-serif text-xl text-brand-dark">{section.title}</h2>
          <div className="mt-4 space-y-3">{renderLines(section.lines)}</div>
        </section>
      ))}
    </article>
  );
}
