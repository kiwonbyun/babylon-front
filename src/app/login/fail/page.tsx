import Button from '@/components/atoms/Button/Button';
import { loginCheck } from '@/lib/serverActions';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

async function page() {
  const user = await loginCheck();
  if (user) {
    redirect('/');
  }
  return (
    <div className="flex-col-box h-full gap-4">
      <h3 className="text-xl font-semibold">로그인에 실패했습니다.</h3>
      <p>다시 시도해주세요</p>
      <Link href={'/login'}>
        <Button>로그인 페이지로 이동</Button>
      </Link>
    </div>
  );
}

export default page;
