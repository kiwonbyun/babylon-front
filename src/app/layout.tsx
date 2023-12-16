import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/globals.css';

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
        <header className="w-full bg-white h-10 flex justify-between items-center px-4">
          <h1>BABYLON</h1>
          <ul className="flex gap-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
