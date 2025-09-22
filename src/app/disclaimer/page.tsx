import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免责声明",
  description: "了解本站的使用条款、免责声明和用户责任。我们致力于提供准确的菜谱信息，但请用户根据实际情况谨慎使用。",
  keywords: ["免责声明", "使用条款", "用户责任", "菜谱安全", "健康提醒"],
  openGraph: {
    title: "免责声明 - 美食菜谱网",
    description: "了解本站的使用条款、免责声明和用户责任。",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <header className="space-y-4 text-center">
        <h1 className="font-serif text-4xl text-brand-dark">免责声明</h1>
        <p className="text-lg text-brand-dark/70">
          请在使用本站服务前仔细阅读以下条款
        </p>
      </header>

      <div className="space-y-10">
        {/* 重要提醒 */}
        <section className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6">
          <h2 className="mb-4 flex items-center font-serif text-xl text-yellow-800">
            ⚠️ 重要提醒
          </h2>
          <p className="text-yellow-800">
            本站提供的菜谱信息仅供参考，请根据个人体质、过敏史和实际情况谨慎使用。
            在尝试任何新食谱前，请确保您对所有食材无过敏反应。
          </p>
        </section>

        {/* 网站性质 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            🌐 网站性质
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <ul className="space-y-3 pl-6">
              <li className="list-disc">
                本站是一个<strong>非营利性</strong>的学习交流平台，专注于中式菜谱的整理和分享
              </li>
              <li className="list-disc">
                本站<strong>不从事任何商业活动</strong>，不销售任何产品或服务
              </li>
              <li className="list-disc">
                本站所有内容均来源于公开信息，经过整理和编辑后免费提供给用户
              </li>
              <li className="list-disc">
                本站致力于传播中华美食文化，促进烹饪知识的交流与学习
              </li>
            </ul>
          </div>
        </section>

        {/* 内容免责 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            📖 内容免责
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <h3 className="font-medium text-brand-dark">菜谱准确性</h3>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                本站菜谱内容经过整理编辑，但可能存在误差或不准确之处
              </li>
              <li className="list-disc">
                用户在使用菜谱时应根据实际情况调整配料比例和制作方法
              </li>
              <li className="list-disc">
                本站不保证按照菜谱制作能达到预期效果或口味
              </li>
            </ul>

            <h3 className="mt-6 font-medium text-brand-dark">健康与安全</h3>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                用户应确保所使用的食材新鲜、安全，符合食品卫生标准
              </li>
              <li className="list-disc">
                本站不对因使用不当食材或制作方法导致的健康问题承担责任
              </li>
              <li className="list-disc">
                有特殊体质、疾病或过敏史的用户应咨询专业医生建议
              </li>
              <li className="list-disc">
                孕妇、儿童、老人等特殊人群使用前应格外谨慎
              </li>
            </ul>
          </div>
        </section>

        {/* 技术免责 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            💻 技术服务
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <ul className="space-y-3 pl-6">
              <li className="list-disc">
                本站努力保证服务的稳定性，但不排除因技术故障、维护升级等原因
                导致的临时性服务中断
              </li>
              <li className="list-disc">
                本站不保证网站内容的实时性、准确性和完整性
              </li>
              <li className="list-disc">
                用户因网络连接、设备问题等技术原因无法正常访问本站的，
                本站不承担相关责任
              </li>
            </ul>
          </div>
        </section>

        {/* 版权免责 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            📝 知识产权
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <ul className="space-y-3 pl-6">
              <li className="list-disc">
                本站内容来源于公开的开源项目和资料，我们尊重原创者的知识产权
              </li>
              <li className="list-disc">
                如发现本站内容涉及版权争议，请及时联系我们，我们将积极处理
              </li>
              <li className="list-disc">
                用户在使用本站内容时应遵守相关法律法规，不得用于商业用途
              </li>
              <li className="list-disc">
                本站所使用的第三方开源组件均遵循其相应的开源许可证
              </li>
            </ul>
          </div>
        </section>

        {/* 用户责任 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            👤 用户责任
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <p>使用本站服务即表示您同意以下条款：</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc">
                理解并接受本站的非营利性质和服务限制
              </li>
              <li className="list-disc">
                对自己的饮食安全和健康负责，谨慎使用菜谱信息
              </li>
              <li className="list-disc">
                不将本站内容用于任何商业用途或违法活动
              </li>
              <li className="list-disc">
                尊重知识产权，合理使用和分享内容
              </li>
              <li className="list-disc">
                对因使用本站服务而产生的任何损失自行承担责任
              </li>
            </ul>
          </div>
        </section>

        {/* 法律声明 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            ⚖️ 法律声明
          </h2>
          <div className="space-y-4 text-brand-dark/80">
            <div className="rounded-lg bg-gray-50 p-6">
              <ul className="space-y-3">
                <li className="list-disc">
                  本免责声明的解释权归本站所有
                </li>
                <li className="list-disc">
                  本站保留随时修改免责声明的权利，修改后的内容将在网站上公布
                </li>
                <li className="list-disc">
                  如本免责声明与相关法律法规冲突，以法律法规为准
                </li>
                <li className="list-disc">
                  因使用本站服务产生的争议适用中华人民共和国法律
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="space-y-4">
          <h2 className="border-b border-brand-muted/20 pb-2 font-serif text-2xl text-brand-dark">
            📞 联系我们
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 text-brand-dark/80">
            <p className="mb-4">
              如您对本免责声明有任何疑问，或在使用过程中遇到问题，请通过以下方式联系我们：
            </p>
            <div className="space-y-2">
              <p>
                <strong>网站：</strong>{" "}
                <a href="https://recipe.bazinga.ink" className="text-blue-600 underline hover:text-blue-800">
                  https://recipe.bazinga.ink
                </a>
              </p>
              <p>
                <strong>版权声明：</strong>{" "}
                <a href="/about" className="text-blue-600 underline hover:text-blue-800">
                  查看版权声明与致谢
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 页面底部 */}
      <footer className="border-t border-brand-muted/20 pt-8 text-center text-sm text-brand-dark/60">
        <p>
          本免责声明自发布之日起生效 |
          最后更新时间：{new Date().toLocaleDateString('zh-CN')}
        </p>
        <p className="mt-2">
          继续使用本站即表示您已阅读、理解并同意上述条款
        </p>
      </footer>
    </div>
  );
}