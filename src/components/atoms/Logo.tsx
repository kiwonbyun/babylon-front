import { fontEmoji, fontPoppinsEN } from '@/lib/fonts';
import { EnumTheme } from '@/types/commonInterface';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const Logo = ({ theme = EnumTheme.WHITE }: { theme?: EnumTheme }) => {
  return (
    <Link className="flex relative w-fit" href="/">
      <span
        className={clsx(
          'text-3xl absolute bottom-3 right-24',
          fontEmoji.className
        )}
      >
        🚀
      </span>
      <h1
        className={clsx(
          'text-2xl font-extrabold tracking-tight',
          fontPoppinsEN.className,
          {
            'text-slate800': theme === EnumTheme.WHITE,
            'text-white': theme === EnumTheme.BLACK,
          }
        )}
      >
        BABYLON
      </h1>
    </Link>
  );
};

export default Logo;
