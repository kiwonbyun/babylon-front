'use client';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubePlayerProps {
  videoId: string | null;
}

function YoutubePlayer({ videoId }: YoutubePlayerProps) {
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
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
}

export default YoutubePlayer;
