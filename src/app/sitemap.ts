import { MetadataRoute } from 'next'
import { getAllRecipes, getCategories } from '@/lib/recipes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe.bazinga.ink'
  const currentDate = new Date()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const categories = getCategories()
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${encodeURIComponent(category.slug)}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const recipes = getAllRecipes()
  const recipePages = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${encodeURIComponent(recipe.category)}/${encodeURIComponent(recipe.slug)}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...categoryPages,
    ...recipePages,
  ]
}