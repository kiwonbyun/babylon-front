import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalProvider from '@/utils/GlobalProvider';
import clsx from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Toaster } from 'sonner';

import { fontNotoSansKR } from '../lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | BABYLON: Share your insights',
    default: 'BABYLON: Share your insights',
  },
  description:
    'Share your insights with people. Creating a more prosperous world.',
};

dayjs.locale('ko');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(fontNotoSansKR.className, 'antialiased scrollbar-hide')}
      >
        <GlobalProvider>
          <Toaster
            position="top-right"
            richColors
            toastOptions={{ duration: 3000 }}
          />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
