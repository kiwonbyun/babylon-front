import { getPostDetail } from '@/app/lib/serverFetch';
import YoutubePlayer from '@/components/atoms/YoutubePlayer';
import React from 'react';

async function page({ params }: { params: { id: string } }) {
  const post = await getPostDetail({ id: params.id });
  const firmLinkId = post.firmLink
    ? new URL(post.firmLink).pathname.replaceAll('/', '')
    : null;

  return (
    <div className="relative w-3/5 aspect-video">
      <YoutubePlayer videoId={firmLinkId} />
    </div>
  );
}

export default page;
