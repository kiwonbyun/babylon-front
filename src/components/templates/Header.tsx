import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SERVICE_MISSION } from '@/constants/common';
import Button from '@components/atoms/Button/Button';
import Logo from '@components/atoms/Logo';

function Header() {
  return (
    <header className="w-full bg-white h-14 flex justify-between items-center px-4 shadow-md">
      <ul className="flex-box gap-3">
        <Link href={'/'}>
          <Logo />
        </Link>
        <small className="text-gray400 text-xs sm:hidden">
          {SERVICE_MISSION}
        </small>
      </ul>
      <ul className="flex-box gap-4 text-sm text-gray700">
        <Link href={'/posts'}>게시물</Link>
        <Link href={'/login'}>
          <Button className="bg-green100 shadow-none">로그인</Button>
        </Link>
        <Link href={'/mypage'}>
          <Image
            src="/default-profile.webp"
            alt="image"
            width={38}
            height={38}
          />
        </Link>
      </ul>
    </header>
  );
}

export default Header;
