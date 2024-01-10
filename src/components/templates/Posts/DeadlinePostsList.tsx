import { fontPoppinsEN } from '@/app/lib/fonts';
import { getPosts } from '@/app/lib/serverFetch';
import PlayBtnImage from '@/components/molecules/PlayBtnImage';
import { getDday } from '@/utils/day';
import React from 'react';

async function DeadlinePostsList() {
  const posts = await getPosts('?auctionEndDateTime=ASC');

  return (
    <ul className="flex flex-col gap-5">
      <h1 className="font-semibold text-lg">곧 마감되는 미팅</h1>
      {posts.map((post) => {
        const dday = getDday(post.auctionEndDateTime);
        return (
          <li key={post.id} className="flex gap-2">
            <section className="w-1/2 aspect-video">
              <PlayBtnImage
                alt={`${post.id}-thumbnail`}
                src={post.thumbnails[0]}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </section>
            <section className="w-1/2 text-xs text-gray500 py-1">
              <div className="flex gap-1">
                <span className={fontPoppinsEN.className}>0000 views</span>
                <span>|</span>
                <span>마감 {dday}일전</span>
              </div>
              <h3 className="text-sm font-semibold text-black my-1">
                {post.title}
              </h3>
              <span>{post.mentor.name}</span>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default DeadlinePostsList;
