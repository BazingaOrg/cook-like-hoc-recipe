import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-brand-dark/10 bg-brand-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* 主要内容区域 */}
        <div className="flex flex-col items-center space-y-6">
          {/* 数据来源 */}
          <div className="text-center">
            <p className="text-sm text-brand-dark/60">
              数据来源：
              <Link
                href="https://github.com/Gar-b-age/CookLikeHOC"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-brand-dark/70 hover:text-brand-dark transition-colors underline"
              >
                CookLikeHOC 项目 ↗
              </Link>
            </p>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-brand-dark/5 px-3 py-1 text-xs text-brand-dark/60">
              非商业用途
            </span>
            <span className="rounded-full bg-brand-dark/5 px-3 py-1 text-xs text-brand-dark/60">
              学习交流
            </span>
            <span className="rounded-full bg-brand-dark/5 px-3 py-1 text-xs text-brand-dark/60">
              开源精神
            </span>
          </div>

          {/* 分割线 */}
          <div className="w-24 border-t border-brand-dark/10"></div>

          {/* 版权信息 */}
          <div className="text-center space-y-2">
            <p className="text-xs text-brand-dark/50">
              © {currentYear} 美食菜谱网 | 基于 MIT 许可证开源
            </p>
            <p className="text-xs text-brand-dark/40 max-w-2xl">
              本站所有商标、品牌名称归其合法所有者所有，内容仅供参考，请根据实际情况谨慎使用
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
