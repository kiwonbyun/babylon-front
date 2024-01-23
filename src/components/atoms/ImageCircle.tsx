import { getDefaultImagePath } from '@/utils/formatter';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ImageCircleProps extends ImageProps {}

function ImageCircle({ ...props }: ImageCircleProps) {
  return (
    <div className={clsx('w-32 h-32 relative', props.className)}>
      <Image
        alt={props.alt}
        src={getDefaultImagePath(props.src)}
        fill
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}

export default ImageCircle;
