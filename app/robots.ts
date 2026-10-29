import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const host = process.env.NEXT_PUBLIC_SITE_URL || 'https://currynation.in';
  return { rules: [{ userAgent: '*', allow: '/' }, { userAgent: 'GPTBot', allow: '/' }, { userAgent: 'OAI-SearchBot', allow: '/' }, { userAgent: 'PerplexityBot', allow: '/' }, { userAgent: 'Google-Extended', allow: '/' }, { userAgent: 'ClaudeBot', allow: '/' }], sitemap: `${host}/sitemap.xml`, host };
}
