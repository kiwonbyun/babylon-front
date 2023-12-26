import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/globals.css';
import GlobalProvider from '@/utils/GlobalProvider';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';

const notoSansKR = Noto_Sans_KR({ subsets: [] });

export const metadata: Metadata = {
  title: 'BABYLON: Share your insights',
  description:
    'Share your insights with people. Creating a more prosperous world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
