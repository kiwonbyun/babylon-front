'use client';

import Button from '@/components/atoms/Button/Button';
import React from 'react';
import { fontEmoji } from '../../lib/fonts';
import Link from 'next/link';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex-col-box h-screen gap-10">
      <h2 className="text-2xl font-semibold break-keep flex-box">
        앗! 문제가 발생했습니다.<span className={fontEmoji.className}>😢</span>
      </h2>
      <p>{error.message}</p>
      <Link href="/">
        <Button className="bg-red300">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
}
