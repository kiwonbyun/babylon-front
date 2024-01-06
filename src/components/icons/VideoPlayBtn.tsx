'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function VideoPlayBtn({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classNames('w-6 h-6', className)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </motion.div>
  );
}

export default VideoPlayBtn;
