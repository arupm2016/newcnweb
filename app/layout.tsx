import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://currynation.in'),
  title: { default: 'Curry Nation | Build Brands That Matter', template: '%s | Curry Nation' },
  description: 'Curry Nation helps ambitious consumer brands build demand, grow commerce, and scale with clarity.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'Curry Nation', title: 'Curry Nation | Build Brands That Matter', description: 'Indian-rooted thinking. Modern growth systems.' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
