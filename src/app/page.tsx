import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { getCategories, getSiteConfig } from "@/lib/recipes";

export default function HomePage() {
  const siteConfig = getSiteConfig();
  const categories = getCategories();
  const hero = (siteConfig.hero ?? {}) as {
    name?: string;
    text?: string;
    tagline?: string;
  };

  return (
    <div className="space-y-16 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Hero name={hero.name} text={hero.text} tagline={hero.tagline} />
      </div>

      <section className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-brand-muted">分类入口</p>
          <h2 className="font-serif text-3xl text-brand-dark">菜系速览</h2>
          <p className="max-w-2xl text-sm text-brand-dark/70">
            保留原始目录结构，快速进入不同菜系。建议先从主食或炒菜入手，逐步扩展到炖煮、卤味等品类。
          </p>
        </div>
        <CategoryGrid categories={categories} />
      </section>
    </div>
  );
}
