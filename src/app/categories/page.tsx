import type { Metadata } from "next";
import { CategoryGrid } from "@/components/category-grid";
import { getCategories } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "菜系列表 · 像老乡鸡那样做饭",
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
