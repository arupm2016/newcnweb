import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://currynation.in';
  const paths = ['', '/contact', '/privacy', '/problems-we-solve', '/commodity-to-brand', '/the-visible-founder', '/pack-labs', '/commerce-labs', '/scale-x-partners', '/unlimit', '/our-work', '/purple-cow-audit', '/brand-dependence-score', '/insights-resources', '/about', '/faqs'];
  return paths.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
}
