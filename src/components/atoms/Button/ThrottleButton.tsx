import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import classNames from 'classnames';

interface ThrottleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  throttleTime?: number;
  className?: string;
}

const ThrottleButton = ({
  children,
  onClick,
  throttleTime = 1000,
  className,
  ...props
}: ThrottleButtonProps) => {
  const [clickDisabled, setClickDisabled] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (clickDisabled) return;
    setClickDisabled(true);
    if (onClick) onClick(e);

    setTimeout(() => {
      setClickDisabled(false);
    }, throttleTime);
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      disabled={clickDisabled}
      className={classNames(
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ThrottleButton;
