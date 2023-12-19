import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import Button from './Button';

interface ThrottleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  throttleTime?: number;
}

const ThrottleButton = ({
  children,
  onClick,
  throttleTime = 1000,
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
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ThrottleButton;
