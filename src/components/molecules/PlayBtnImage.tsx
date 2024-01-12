import Image, { ImageProps } from 'next/image';
import React from 'react';
import VideoPlayBtn from '@components/icons/VideoPlayBtn';
import clsx from 'clsx';

interface PlayBtnImageProps extends ImageProps {
  alt: string;
  className?: string;
}

function PlayBtnImage({ alt, className, ...props }: PlayBtnImageProps) {
  return (
    <figure
      className={clsx('relative w-full aspect-video cursor-pointer', className)}
    >
      <Image {...props} alt={alt} />
      <div className="absolute w-full h-full flex-box opacity-0 hover:opacity-80 transition-opacity">
        <VideoPlayBtn className="w-20 h-20 text-white stroke-2 md:w-16 md:h-16 sm:w-12 sm:h-12" />
      </div>
    </figure>
  );
}

export default PlayBtnImage;
