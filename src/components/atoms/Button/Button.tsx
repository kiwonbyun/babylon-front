import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'px-4 py-2 rounded shadow-md shadow-gray500/40 text-sm bg-gray300',
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
