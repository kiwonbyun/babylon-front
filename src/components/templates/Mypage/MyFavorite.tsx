import { fontEmoji } from '@/lib/fonts';
import { getMyLikes } from '@/lib/serverFetch';
import clsx from 'clsx';
import React from 'react';
import LikeCard from './LikeCard';
import { Post } from '@/types/postsInterface';

async function MyFavorite() {
  const likes = await getMyLikes();
  if (!likes.length) {
    return (
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-5">내가 찜한 미팅</h3>
        <div className="flex-col-box space-y-3">
          <h3>찜한 미팅이 없습니다.</h3>
          <p>멘토를 만나 통찰력을 얻어보세요.</p>
          <div className={clsx(fontEmoji.className, 'text-6xl')}>🚀</div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-5">내가 찜한 미팅</h3>
      <ul className="flex flex-col gap-2">
        {likes.map((post: Post) => (
          <LikeCard post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default MyFavorite;
