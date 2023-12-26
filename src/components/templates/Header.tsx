import Link from 'next/link';
import React from 'react';
import Button from '../atoms/Button/Button';
import Image from 'next/image';

function Header() {
  return (
    <header className="w-full bg-white h-14 flex justify-between items-center px-4 shadow-md">
      <ul className="flex-box gap-3">
        <Link href={'/'}>
          <h1 className=" text-2xl font-extrabold text-green400 tracking-tight">
            BABYLON
          </h1>
        </Link>
        <small className="text-gray400 text-xs sm:hidden">
          Spreading your insight for a better tomorrow
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
