import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Benji Kim — Product designer', description: 'Product design and user research by Benji Kim. Based in NYC, with 15 years experience across financial services, healthcare, and insurance.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
