'use client';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[] | string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === '-' || e.key === '+') {
      e.preventDefault();
    }
  };

  return (
    <input
      {...props}
      ref={ref}
      onKeyDown={props.type === 'number' ? handleKeyDown : undefined}
      className={clsx(
        'border outline-none rounded outline-1 border-gray300 px-4 py-3 focus:border-blue400 placeholder:font-light disabled:bg-gray100 disabled:text-gray600 placeholder:text-sm',
        props.className,
        {
          'border-red500': props.error,
        }
      )}
    />
  );
});

Input.displayName = 'Input';

export default Input;
