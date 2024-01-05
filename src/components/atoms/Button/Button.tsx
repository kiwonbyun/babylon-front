import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={classnames('px-4 py-2 rounded text-sm', className)}
    >
      {children}
    </button>
  );
}

export default Button;
