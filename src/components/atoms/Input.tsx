import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        'border outline-none rounded outline-1 border-gray300 p-4 focus:border-blue400 placeholder:font-light',
        props.className
      )}
    />
  );
});

Input.displayName = 'Input';

export default Input;
