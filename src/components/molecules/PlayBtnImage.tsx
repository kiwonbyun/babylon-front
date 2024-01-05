import Image, { ImageProps } from 'next/image';
import React from 'react';
import VideoPlayBtn from '@components/icons/VideoPlayBtn';
import classNames from 'classnames';

interface PlayBtnImageProps extends ImageProps {
  alt: string;
  className?: string;
}

function PlayBtnImage({ alt, className, ...props }: PlayBtnImageProps) {
  return (
    <figure
      className={classNames(
        'relative w-full aspect-video cursor-pointer',
        className
      )}
    >
      <Image {...props} alt={alt} />
      <div className="absolute w-full h-full flex-box opacity-0 hover:opacity-80 transition-opacity">
        <VideoPlayBtn className="w-14 h-20 text-white stroke-2" />
      </div>
    </figure>
  );
}

export default PlayBtnImage;
