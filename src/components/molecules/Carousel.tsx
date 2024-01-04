'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import imagePreloader from '@/utils/imagePreloader';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface CarouselProps<T> {
  className?: string;
  items: T[];
  renderKey: keyof T;
}

const Carousel = <T extends { link?: string }>({
  className,
  items,
  renderKey,
}: CarouselProps<T>) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const imageIndex = wrap(0, items.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  /**
   * framer-motion으로 만든 Carousel은 dom을 미리 마운트하지 않기 때문에 이미지를 미리 로드해야 한다.
   * 그렇지 않으면 유저가 캐러셀을 넘기고 나서 이미지가 로드되기 때문에 깜빡거리는 현상이 발생한다.
   */
  useEffect(() => {
    const images = items?.map((item) => item[renderKey]);
    if (images.length) {
      imagePreloader(images as string[]);
    }
  }, [items, renderKey]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        alt={items[imageIndex][renderKey] as string}
        className={classNames(
          'aspect-banner object-cover object-center',
          className
        )}
        key={page}
        src={items[imageIndex][renderKey] as string}
        custom={direction}
        variants={variants}
        transition={{
          x: { type: 'spring', stiffness: 500, damping: 40 },
          opacity: { duration: 0.3 },
        }}
        initial="enter"
        animate="center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      />
    </AnimatePresence>
  );
};

export default Carousel;
