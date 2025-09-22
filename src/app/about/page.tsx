import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "版权声明与致谢",
  description: "了解本站的数据来源、版权声明以及对开源社区的致谢。我们致力于推广中式美食文化，感谢所有贡献者的努力。",
  keywords: ["版权声明", "致谢", "开源", "菜谱来源", "CookLikeHOC"],
  openGraph: {
    title: "版权声明与致谢 - 美食菜谱网",
    description: "了解本站的数据来源、版权声明以及对开源社区的致谢。",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <header className="space-y-4 text-center">
        <h1 className="font-serif text-4xl text-brand-dark">版权声明与致谢</h1>
        <p className="text-lg text-brand-dark/70">
          感谢开源社区的无私奉献，让美食文化得以传承与分享
        </p>
      </header>

      <div className="space-y-10">
        {/* 数据来源声明 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            📚 数据来源声明
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <p>
              本站菜谱数据来源于开源项目{" "}
              <a
                href="https://github.com/Gar-b-age/CookLikeHOC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                CookLikeHOC
              </a>
              ，该项目对公开发布的菜品信息进行了系统化整理、归纳和编辑。
            </p>
            <p>
              原始数据基于《菜品溯源报告》，该报告由相关企业主动公开发布，
              包含详细的菜品制作工艺、配料说明和溯源信息。
            </p>
            <p>
              我们严格遵循开源精神，仅将这些公开信息用于学习交流和文化传播，
              未对任何内容进行商业化使用。
            </p>
          </div>
        </section>

        {/* 致谢 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            🙏 特别致谢
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <div className="rounded-lg bg-brand-cream/50 p-6">
              <h3 className="mb-3 font-medium text-brand-dark">致 CookLikeHOC 项目团队</h3>
              <p>
                感谢 CookLikeHOC 项目的所有贡献者，你们的无私奉献让这些珍贵的烹饪知识
                得以数字化保存和传播。开源是一种精神，是社会文明的进步。
              </p>
            </div>

            <div className="rounded-lg bg-brand-cream/50 p-6">
              <h3 className="mb-3 font-medium text-brand-dark">致开源社区</h3>
              <p>
                感谢整个开源社区的开放与共享精神。正是因为有了像 Next.js、React、
                Tailwind CSS 等优秀的开源项目，我们才能快速搭建这样的学习平台。
              </p>
            </div>

            <div className="rounded-lg bg-brand-cream/50 p-6">
              <h3 className="mb-3 font-medium text-brand-dark">致中华美食文化</h3>
              <p>
                感谢千百年来中华美食文化的传承者们，从民间厨师到餐饮企业，
                每一道菜的背后都凝聚着无数人的智慧和创新。
              </p>
            </div>
          </div>
        </section>

        {/* 版权说明 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            ⚖️ 版权说明
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                本站所有菜谱内容仅供个人学习和非商业用途参考使用
              </li>
              <li className="list-disc">
                所有商标、品牌名称归其合法所有者所有
              </li>
              <li className="list-disc">
                本站代码采用 MIT 许可证开源，欢迎学习和改进
              </li>
              <li className="list-disc">
                如果您是相关内容的版权所有者并认为本站内容侵犯了您的权益，请及时联系我们
              </li>
            </ul>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            📧 联系我们
          </h2>
          <div className="rounded-lg bg-brand-cream/50 p-6 text-brand-dark/80">
            <p>
              如有任何问题、建议或版权相关事宜，请通过以下方式联系我们：
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>网站：</strong>{" "}
                <a href="https://recipe.bazinga.ink" className="text-blue-600 underline hover:text-blue-800">
                  https://recipe.bazinga.ink
                </a>
              </p>
              <p>
                <strong>项目仓库：</strong>{" "}
                <a href="https://github.com/Gar-b-age/CookLikeHOC" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  GitHub - CookLikeHOC
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 开源声明 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            🌟 开源精神
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <blockquote className="border-l-4 border-blue-500 bg-blue-50/50 p-6 italic">
              "开源是一种精神，是社会文明的进步，本着对消费者的公开与坦诚，
              和对顾客知情权和选择权的尊重！"
            </blockquote>
            <p>
              我们深信，知识和文化应该被自由地分享和传承。通过开源的方式，
              我们希望能够：
            </p>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">促进中华美食文化的传播与交流</li>
              <li className="list-disc">降低学习烹饪的门槛，让更多人受益</li>
              <li className="list-disc">建立一个开放、透明的美食知识平台</li>
              <li className="list-disc">鼓励更多的知识分享和创新</li>
            </ul>
          </div>
        </section>
      </div>

      {/* 页面底部 */}
      <footer className="border-t border-brand-muted/20 pt-8 text-center text-sm text-brand-dark/60">
        <p>
          本页面最后更新于 {new Date().toLocaleDateString('zh-CN')} |
          感谢您对开源精神的支持与理解
        </p>
      </footer>
    </div>
  );
}