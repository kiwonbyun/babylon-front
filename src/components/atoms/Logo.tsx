import { fontEmoji, fontPoppinsEN } from '@/app/fonts';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link className="flex relative w-fit" href="/">
      <span
        className={classNames(
          'text-3xl absolute bottom-3 right-24',
          fontEmoji.className
        )}
      >
        🚀
      </span>
      <h1
        className={classNames(
          'text-2xl font-extrabold text-slate800 tracking-tight',
          fontPoppinsEN.className
        )}
      >
        BABYLON
      </h1>
    </Link>
  );
};

export default Logo;
