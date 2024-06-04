'use client'; // Error components must be Client Components
import Button from '@/components/atoms/Button/Button';
import Logo from '@/components/atoms/Logo';
import { SERVICE_MISSION } from '@/constants/common';
import Link from 'next/link';
import { fontEmoji } from '../lib/fonts';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <header className="w-full bg-white h-16 flex justify-between items-center px-6 shadow-md">
        <ul className="flex-box gap-3">
          <Logo />
          <small className="text-gray400 text-xs sm:hidden">
            {SERVICE_MISSION}
          </small>
        </ul>
        <ul className="flex-box gap-4 text-sm text-gray700">
          <Link href={'/posts'}>게시물</Link>
          <Link href={'/login'}>
            <Button className="shadow-none bg-red600 text-white">로그인</Button>
          </Link>
        </ul>
      </header>

      <article className="flex-col-box mt-40 gap-10">
        <h2 className="text-2xl font-semibold break-keep gap-2 flex-box sm:flex-col-box">
          <span>앗! 문제가 발생했습니다.</span>
          <span>고객센터에 문의해 주세요.</span>
          <span className={fontEmoji.className}>😥</span>
        </h2>
        <span className="break-keep">{error?.message}</span>
        <Button onClick={() => reset()} className="bg-red300">
          다시 시도하기
        </Button>
      </article>
    </div>
  );
}
