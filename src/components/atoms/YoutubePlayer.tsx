'use client';
import clsx from 'clsx';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubePlayerProps {
  videoId: string | null;
  className?: string;
}

function YoutubePlayer({ videoId, className }: YoutubePlayerProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.mute();
  };

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  if (!videoId) return null;

  return (
    <div className={clsx(className, 'relative w-96 aspect-video')}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default YoutubePlayer;
