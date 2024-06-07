import HoverItemImage from '@/components/molecules/HoverItemImage';
import { Post } from '@/types/postsInterface';
import Link from 'next/link';
import React from 'react';
import HoverInfo from '../Post/HoverInfo';

function GridPosts({ items }: { items: Post[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
      {items.map((post) => (
        <li key={post.id} className="w-full">
          <Link href={`posts/${post.id}`}>
            <HoverItemImage
              alt={`posts-thumbnail-${post.id}`}
              src={post.thumbnails[0]}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
              blurDataURL={post.base64}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              render={<HoverInfo post={post} />}
            />

            <div>
              <h3 className="font-bold text-lg text-black break-keep sm:text-base">
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
