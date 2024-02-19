import Image, { ImageProps } from 'next/image';
import React from 'react';
import clsx from 'clsx';

interface PlayBtnImageProps extends ImageProps {
  alt: string;
  className?: string;
  render?: React.ReactNode;
}

function HoverItemImage({
  alt,
  className,
  render,
  ...props
}: PlayBtnImageProps) {
  return (
    <figure
      className={clsx('relative w-full aspect-video cursor-pointer', className)}
    >
      <Image {...props} alt={alt} />
      <div className="absolute w-full h-full flex-box opacity-0 hover:opacity-80 transition-opacity">
        {render}
      </div>
    </figure>
  );
}

export default HoverItemImage;
