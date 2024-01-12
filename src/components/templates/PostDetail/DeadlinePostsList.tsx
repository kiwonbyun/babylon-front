import PlayBtnImage from '@/components/molecules/PlayBtnImage';
import { fontPoppinsEN } from '@/lib/fonts';
import { Post } from '@/types/postsInterface';
import { getDday } from '@/utils/day';
import Link from 'next/link';
import React from 'react';

function DeadlinePostsList({ items }: { items: Post[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li className="flex gap-2">
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
                  <span className={fontPoppinsEN.className}>
                    {post.views} views
                  </span>
                  <span>|</span>
                  <span>마감 {getDday(post.auctionEndDateTime)}일전</span>
                </div>
                <h3 className="text-sm font-semibold text-black my-1">
                  {post.title}
                </h3>
                <span>{post.mentor.name}</span>
              </section>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default DeadlinePostsList;
