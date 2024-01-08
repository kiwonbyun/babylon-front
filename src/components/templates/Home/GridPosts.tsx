import PlayBtnImage from '@/components/molecules/PlayBtnImage';
import { Post } from '@/types/postsInterface';
import Link from 'next/link';
import React from 'react';

function GridPosts({ items }: { items: Post[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {items.map((post) => (
        <li key={post.id} className="w-full">
          <Link href={`posts/${post.id}`}>
            <PlayBtnImage
              alt={`posts-thumbnail-${post.id}`}
              src={post.thumbnails[0]}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
              blurDataURL={post.base64}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div>
              <h3 className="font-bold text-lg text-black break-keep">
                {post.title}
              </h3>
              <span className="text-xs text-gray900 font-light">
                {post.mentor.name}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GridPosts;
