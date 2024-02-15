import { fontEmoji, fontPoppinsEN } from '@/lib/fonts';
import { EnumTheme } from '@/types/commonInterface';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Rocket from '@components/icons/Rocket';

const Logo = ({ theme = EnumTheme.WHITE }: { theme?: EnumTheme }) => {
  return (
    <Link className="flex w-fit gap-1" href="/">
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
      <Rocket />
    </Link>
  );
};

export default Logo;
