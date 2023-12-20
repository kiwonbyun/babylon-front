import Link from 'next/link';
import React from 'react';

function Header() {
  return (
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
  );
}

export default Header;
