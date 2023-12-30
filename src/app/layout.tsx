import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalProvider from '@/utils/GlobalProvider';

import classNames from 'classnames';
import { fontNotoSansKR } from './fonts';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';

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
      <body className={classNames(fontNotoSansKR.className, 'antialiased')}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
