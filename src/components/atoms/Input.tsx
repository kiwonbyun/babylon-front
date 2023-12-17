import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        'px-2 py-1 border-b-2 outline-none',
        props.className
      )}
    />
  );
});

Input.displayName = 'Input';

export default Input;
