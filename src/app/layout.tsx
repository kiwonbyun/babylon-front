import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalProvider from '@/utils/GlobalProvider';

import classNames from 'classnames';
import { fontNotoSansKR } from './fonts';

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
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
