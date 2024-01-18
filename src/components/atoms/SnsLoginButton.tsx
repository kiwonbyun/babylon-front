import { fontPoppinsEN } from '@/lib/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const SnsLoginButton = ({
  icon,
  text,
  className,
  href,
}: {
  icon: ReactNode;
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link className="bg-gray100 w-60 flex rounded cursor-pointer" href={href}>
      <div className={clsx('rounded-l h-10 w-12 flex-box', className)}>
        {icon}
      </div>
      <h3
        className={clsx(
          'flex items-center justify-center w-full text-slate800 font-medium',
          fontPoppinsEN.className
        )}
      >
        {text}
      </h3>
    </Link>
  );
};

export default SnsLoginButton;
