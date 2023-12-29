import { fontPoppinsEN } from '@/app/fonts';
import classNames from 'classnames';
import React from 'react';

const Logo = () => {
  return (
    <h1
      className={classNames(
        'text-2xl font-extrabold text-green400 tracking-tight',
        fontPoppinsEN.className
      )}
    >
      BABYLON
    </h1>
  );
};

export default Logo;
