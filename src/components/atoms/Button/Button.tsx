import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className = 'bg-gray300', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={classnames('px-5', 'py-3', 'rounded', className)}
    >
      {children}
    </button>
  );
}

export default Button;
