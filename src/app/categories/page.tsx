import type { Metadata } from "next";
import { CategoryGrid } from "@/components/category-grid";
import { getCategories } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "全部菜系分类",
  description: "浏览美食菜谱网的所有菜系分类。包含主食、炒菜、炖菜、汤品、凉拌、卤菜、早餐、炸品、烤类、蒸菜等15个经典中式菜系，每个分类都有详细的菜谱制作说明。",
  keywords: ["菜系分类", "中式菜谱分类", "中式菜系", "中华美食分类", "家常菜分类"],
  openGraph: {
    title: "全部菜系分类 - 美食菜谱网",
    description: "浏览美食菜谱网的所有菜系分类。包含主食、炒菜、炖菜、汤品等15个经典中式菜系。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "全部菜系分类 - 美食菜谱网",
    description: "浏览美食菜谱网的所有菜系分类。包含主食、炒菜、炖菜、汤品等15个经典中式菜系。",
  },
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm font-medium text-brand-muted">菜系</p>
        <h1 className="font-serif text-4xl text-brand-dark">全部分类</h1>
        <p className="max-w-2xl text-sm text-brand-dark/70">
          按照 CookLikeHOC 的目录结构整理，保留原有菜系划分。点击任意分类进入菜谱列表。
        </p>
      </header>
      <CategoryGrid categories={categories} />
    </div>
  );
}
