import Link from 'next/link';
import React from 'react';
import { SERVICE_MISSION } from '@/constants/common';
import Button from '@components/atoms/Button/Button';
import Logo from '@components/atoms/Logo';
import { loginCheck } from '@/lib/serverActions';
import { EnumTheme } from '@/types/commonInterface';
import clsx from 'clsx';
import { getUser } from '@/lib/serverFetch';
import ImageCircle from '../atoms/ImageCircle';
import HeaderProfileBtn from '../molecules/HeaderProfileBtn';

async function Header({ theme = EnumTheme.WHITE }: { theme?: EnumTheme }) {
  const token = await loginCheck();
  const user = await getUser({ id: token?.sub });

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
      <div className="flex-box gap-3">
        <Logo theme={theme} />
        <small
          className={clsx('text-gray400 text-xs sm:hidden', {
            'text-gray400': darkTheme,
            'text-gray800': !darkTheme,
          })}
        >
          {SERVICE_MISSION}
        </small>
      </div>
      <div
        className={clsx('flex-box gap-4 text-sm', {
          'text-white': darkTheme,
          'text-gray900': !darkTheme,
        })}
      >
        <Link href={'/posts'}>게시물</Link>
        {user ? (
          <HeaderProfileBtn imageSrc={user.profileImage} />
        ) : (
          <Link href={'/login'}>
            <Button className="shadow-none bg-red600 text-white">로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
