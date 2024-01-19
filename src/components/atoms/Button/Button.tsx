import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx('px-4 py-2 rounded-sm text-sm bg-gray200', className)}
    >
      {children}
    </button>
  );
}

export default Button;
