import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[] | string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(
        'border outline-none rounded outline-1 border-gray300 px-4 py-3 focus:border-blue400 placeholder:font-light disabled:bg-gray100',
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
