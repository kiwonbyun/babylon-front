import { getPostDetail } from '@/app/lib/serverFetch';
import YoutubePlayer from '@/components/atoms/YoutubePlayer';
import Heart from '@/components/icons/Heart';
import DeadlinePostsList from '@/components/templates/Posts/DeadlinePostsList';
import dayjs from 'dayjs';
import React from 'react';

async function page({ params }: { params: { id: string } }) {
  const post = await getPostDetail({ id: params.id });
  const firmLinkId = post.firmLink
    ? new URL(post.firmLink).pathname.replaceAll('/', '')
    : null;

  const createDate = dayjs(post.createdAt).format('YYYY M D');

  return (
    <main className="w-[90%] m-auto mt-4 flex gap-4">
      <section className="w-[65%]">
        <YoutubePlayer videoId={firmLinkId} className="w-full" />
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <div className="flex flex-1 flex-wrap items-center text-xs text-gray500 gap-2 ml-1">
          <span>{createDate}</span>
          <span>|</span>
          <span>{post.mentor.name}</span>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Heart className="!w-4 !h-4" />
            {post.likeCount}
          </div>
        </div>
      </section>
      <section className="w-[35%]">
        <DeadlinePostsList />
      </section>
    </main>
  );
}

export default page;
