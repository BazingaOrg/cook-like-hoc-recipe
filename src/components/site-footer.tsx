import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-brand-dark/10 bg-brand-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* 主要内容区域 */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* 网站信息 */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-brand-dark">美食菜谱网</h3>
            <p className="text-sm text-brand-dark/70 leading-relaxed">
              致力于传承和分享中华美食文化，提供丰富的家常菜制作方法。
              所有菜谱内容均来源于开源项目整理，仅供学习交流使用。
            </p>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark">快速导航</h4>
            <div className="space-y-2 text-sm">
              <Link href="/categories" className="block text-brand-dark/70 hover:text-brand-dark transition-colors">
                菜系分类
              </Link>
              <Link href="/about" className="block text-brand-dark/70 hover:text-brand-dark transition-colors">
                版权声明与致谢
              </Link>
              <Link href="/disclaimer" className="block text-brand-dark/70 hover:text-brand-dark transition-colors">
                免责声明
              </Link>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="space-y-4">
            <h4 className="font-medium text-brand-dark">数据来源</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="https://github.com/Gar-b-age/CookLikeHOC"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-brand-dark/70 hover:text-brand-dark transition-colors"
              >
                CookLikeHOC 项目 ↗
              </Link>
              <p className="text-brand-dark/60">
                基于公开的菜品溯源报告整理
              </p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="my-8 border-t border-brand-dark/10"></div>

        {/* 底部版权信息 */}
        <div className="flex flex-col gap-4 text-center text-sm text-brand-dark/60 md:flex-row md:justify-between md:text-left">
          <div className="space-y-1">
            <p>© {currentYear} 美食菜谱网 | 基于 MIT 许可证开源</p>
            <p>感谢开源社区的无私奉献，让美食文化得以传承与分享</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <span className="rounded bg-brand-dark/5 px-2 py-1 text-xs">
              非商业用途
            </span>
            <span className="rounded bg-brand-dark/5 px-2 py-1 text-xs">
              学习交流
            </span>
            <span className="rounded bg-brand-dark/5 px-2 py-1 text-xs">
              开源精神
            </span>
          </div>
        </div>

        {/* 额外声明 */}
        <div className="mt-6 rounded-lg bg-brand-dark/5 p-4 text-center text-xs text-brand-dark/50">
          <p>
            本站所有商标、品牌名称归其合法所有者所有 |
            如有版权争议请联系我们 |
            网站内容仅供参考，请根据实际情况谨慎使用
          </p>
        </div>
      </div>
    </footer>
  );
}
