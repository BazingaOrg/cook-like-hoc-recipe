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

      {/* 版权声明和致谢区域 */}
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-lg bg-brand-cream/30 p-8">
          <h3 className="mb-4 font-serif text-xl text-brand-dark">📚 关于本站</h3>
          <div className="space-y-4 text-sm text-brand-dark/70">
            <p>
              本站致力于传承和分享中华美食文化，提供丰富的家常菜制作方法。
              所有菜谱内容均来源于开源项目整理，仅供学习交流使用。
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <a
                href="/about"
                className="rounded bg-brand-dark/10 px-3 py-1 transition-colors hover:bg-brand-dark/20"
              >
                版权声明与致谢
              </a>
              <a
                href="/disclaimer"
                className="rounded bg-brand-dark/10 px-3 py-1 transition-colors hover:bg-brand-dark/20"
              >
                免责声明
              </a>
              <a
                href="https://github.com/Gar-b-age/CookLikeHOC"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-brand-dark/10 px-3 py-1 transition-colors hover:bg-brand-dark/20"
              >
                数据来源 ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
