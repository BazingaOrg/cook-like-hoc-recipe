import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReferenceList } from "@/components/reference-list";
import { RecipeDetail } from "@/components/recipe-detail";
import { getAllRecipes, getRecipe } from "@/lib/recipes";

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({
    category: recipe.category,
    recipe: recipe.slug,
  }));
}

type RecipeRouteParams = Promise<{ category: string; recipe: string }>;

export async function generateMetadata({
  params,
}: {
  params: RecipeRouteParams;
}): Promise<Metadata> {
  const { category, recipe } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const normalizedSlug = decodeURIComponent(recipe);
  const recipeData = getRecipe(normalizedCategory, normalizedSlug);
  if (!recipeData) {
    return {
      title: "未找到菜谱",
      description: "抱歉，您访问的菜谱页面不存在。",
    };
  }

  const description = recipeData.description
    ? `${recipeData.description.slice(0, 100)}${recipeData.description.length > 100 ? '...' : ''}`
    : `${recipeData.title}的详细制作方法，包含${recipeData.ingredients.length}种配料和${recipeData.steps.length}个制作步骤。跟随老乡鸡风味，在家轻松制作正宗${recipeData.category}。`;

  return {
    title: `${recipeData.title}的做法`,
    description,
    keywords: [
      `${recipeData.title}做法`,
      `${recipeData.title}怎么做`,
      `${recipeData.title}家常做法`,
      `${recipeData.category}菜谱`,
      "中式菜谱",
      "家常菜"
    ],
    openGraph: {
      title: `${recipeData.title}的做法 - ${recipeData.category} - 美食菜谱网`,
      description,
      type: "article",
      locale: "zh_CN",
      section: recipeData.category,
      tags: [recipeData.category, "菜谱", "家常菜"],
    },
    twitter: {
      card: "summary",
      title: `${recipeData.title}的做法 - ${recipeData.category}`,
      description,
    },
    alternates: {
      canonical: `/recipes/${normalizedCategory}/${normalizedSlug}`,
    },
  };
}

export default async function RecipePage({
  params,
}: {
  params: RecipeRouteParams;
}) {
  const { category, recipe } = await params;
  const normalizedCategory = decodeURIComponent(category);
  const normalizedSlug = decodeURIComponent(recipe);
  const recipeData = getRecipe(normalizedCategory, normalizedSlug);
  if (!recipeData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipeData.title,
    description: recipeData.description || `${recipeData.title}的制作方法`,
    recipeCategory: recipeData.category,
    recipeCuisine: "中式",
    recipeIngredient: recipeData.ingredients,
    recipeInstructions: recipeData.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
    },
    author: {
      "@type": "Organization",
      name: "CookLikeHOC",
    },
    datePublished: "2024-01-01",
    keywords: [recipeData.category, "菜谱", "中式家常菜", "美食菜谱"].join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://recipe.bazinga.ink"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "菜系分类",
        "item": "https://recipe.bazinga.ink/categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${recipeData.category}菜谱`,
        "item": `https://recipe.bazinga.ink/categories/${normalizedCategory}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${recipeData.title}的做法`,
        "item": `https://recipe.bazinga.ink/recipes/${normalizedCategory}/${normalizedSlug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="space-y-8">
        <RecipeDetail recipe={recipeData} />
        <div className="mx-auto max-w-4xl px-6 pb-12">
          <ReferenceList references={recipeData.references} />
        </div>
      </div>
    </>
  );
}
