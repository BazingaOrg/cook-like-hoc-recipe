export function buildCategoryPath(category: string): string {
  return `/categories/${category}`;
}

export function buildRecipePath(category: string, slug: string): string {
  return `/recipes/${category}/${slug}`;
}

export function parseRecipeLink(link: string): { category: string; slug: string } | null {
  if (!link) return null;
  let cleaned = link.trim();
  if (cleaned.startsWith('/')) {
    cleaned = cleaned.slice(1);
  }
  if (!cleaned) return null;
  const segments = cleaned.split('/').filter(Boolean);
  if (segments.length < 2) return null;
  const [category, ...rest] = segments;
  const slug = rest.join('/');
  return { category: decodeURIComponent(category), slug: decodeURIComponent(slug) };
}
