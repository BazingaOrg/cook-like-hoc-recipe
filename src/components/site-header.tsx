import Link from "next/link";
export function SiteHeader() {
  return (
    <header className="border-b border-brand-dark/20 bg-brand-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-brand-dark">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green font-serif text-lg text-brand-cream">
            菜
          </div>
          <div>
            <p className="font-serif text-xl font-semibold tracking-wide">
              像老乡鸡那样做饭
            </p>
            <p className="text-xs text-brand-dark/70">
              CookLikeHOC · 私人食谱整理
            </p>
          </div>
        </Link>
        <a
          href="https://github.com/BazingaOrg/cook-like-hoc-recipe"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-brand-green/20 px-4 py-2 text-xs font-semibold text-brand-green transition hover:bg-brand-green/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream sm:text-sm"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
