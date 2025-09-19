import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-brand-dark/10 bg-brand-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-brand-dark/70">
        <p className="font-serif text-base text-brand-dark">灵感来源</p>
        <p className="mt-2 leading-relaxed">
          数据整理自
          <Link
            href="https://github.com/Gar-b-age/CookLikeHOC"
            className="ml-1 inline-flex items-center gap-1 text-brand-green underline underline-offset-4 hover:decoration-2"
          >
            CookLikeHOC GitHub 仓库
          </Link>
          。本项目用于个人学习与烹饪记录。
        </p>
      </div>
    </footer>
  );
}
