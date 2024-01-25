'use client';
import React from 'react';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';
import Loading from '@components/atoms/Loading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="button"
      {...props}
      disabled={pending}
      className={clsx('px-4 py-2 rounded-sm text-sm bg-gray200', className)}
    >
      {props.type === 'submit' && pending ? <Loading /> : children}
    </button>
  );
}

export default Button;
