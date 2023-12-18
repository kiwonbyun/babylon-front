import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/globals.css';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import ToastProvider from '@/hooks/Custom/Toast/ToastProvider';
import Link from 'next/link';

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
      <body className={`${notoSansKR.className}`}>
        <header className="w-full bg-white h-10 flex justify-between items-center px-4">
          <ul className="flex-box gap-2">
            <li>
              <Link href={'/'}>
                <h1 className=" text-2xl font-extrabold text-green500 tracking-tight">
                  BABYLON
                </h1>
              </Link>
            </li>
            <li>
              <Link href={'/posts'} className="text-sm">
                게시물
              </Link>
            </li>
          </ul>
          <ul className="flex-box gap-2">
            <li>
              <Link href={'/login'} className="text-sm">
                로그인
              </Link>
            </li>
            <li>
              <Link href={'/signup'} className="text-sm">
                회원가입
              </Link>
            </li>
            <li>user</li>
          </ul>
        </header>

        <ReactQueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
