import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/site';
import SiteShell from '@/components/SiteShell';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: 'Curry Nation | From Commodity to Brand', template: '%s | Curry Nation' },
  description: 'Curry Nation helps ambitious Indian businesses build differentiation, customer demand, pricing power and brand-led growth.',
  openGraph: { type: 'website', siteName: 'Curry Nation', title: 'Curry Nation | From Commodity to Brand', description: 'Build the brand that earns preference, protects value and gives growth momentum.', url: siteUrl, images: ['/assets/curry-nation-logo.png'] },
  twitter: { card: 'summary_large_image', title: 'Curry Nation | From Commodity to Brand', description: 'Build a stronger reason to be chosen.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 const org = { '@context':'https://schema.org', '@type':'Organization', name:'Curry Nation Brand Conversations Pvt. Ltd.', url:siteUrl, logo:`${siteUrl}/assets/curry-nation-logo.png`, email:'nagesshp@currynation.in', telephone:'+91 92235 02716', address:{'@type':'PostalAddress',streetAddress:'2nd Floor, Pinnacle Business Park, Mahakali Caves Road, Andheri (East)',addressLocality:'Mumbai',postalCode:'400093',addressCountry:'IN'} };
 return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org)}}/><SiteShell>{children}</SiteShell></body></html>;
}
