import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SERVICE_MISSION } from '@/constants/common';
import Button from '@components/atoms/Button/Button';
import Logo from '@components/atoms/Logo';
import { loginCheck } from '@/lib/serverActions';

async function Header() {
  const loginUser = await loginCheck();

  return (
    <header className="w-full bg-white h-16 flex justify-between items-center px-6 shadow-md">
      <ul className="flex-box gap-3">
        <Logo />
        <small className="text-gray400 text-xs sm:hidden">
          {SERVICE_MISSION}
        </small>
      </ul>
      <ul className="flex-box gap-4 text-sm text-gray700">
        <Link href={'/posts'}>게시물</Link>
        {loginUser ? (
          <Link href={'/mypage'}>
            <Image
              src="/default-profile.webp"
              alt="image"
              width={38}
              height={38}
            />
          </Link>
        ) : (
          <Link href={'/login'}>
            <Button className="shadow-none bg-red600 text-white">로그인</Button>
          </Link>
        )}
      </ul>
    </header>
  );
}

export default Header;
