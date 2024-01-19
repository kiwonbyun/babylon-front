import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SERVICE_MISSION } from '@/constants/common';
import Button from '@components/atoms/Button/Button';
import Logo from '@components/atoms/Logo';
import { loginCheck } from '@/lib/serverActions';
import { EnumTheme } from '@/types/commonInterface';
import clsx from 'clsx';

async function Header({ theme = EnumTheme.WHITE }: { theme?: EnumTheme }) {
  const loginUser = await loginCheck();
  const darkTheme = theme === EnumTheme.BLACK;

  return (
    <header
      className={clsx(
        'w-full h-16 flex justify-between items-center px-6 shadow-md',
        {
          'bg-white': !darkTheme,
          'bg-black': darkTheme,
        }
      )}
    >
      <ul className="flex-box gap-3">
        <Logo theme={theme} />
        <small
          className={clsx('text-gray400 text-xs sm:hidden', {
            'text-gray400': darkTheme,
            'text-white': !darkTheme,
          })}
        >
          {SERVICE_MISSION}
        </small>
      </ul>
      <ul
        className={clsx('flex-box gap-4 text-sm', {
          'text-white': darkTheme,
          'text-gray900': !darkTheme,
        })}
      >
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
