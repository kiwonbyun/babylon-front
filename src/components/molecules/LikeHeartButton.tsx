import React from 'react';
import Heart from '../icons/Heart';
import clsx from 'clsx';
import { createLikeSA, deleteLikeSA } from '@/lib/serverActions';
import { getIsLiked } from '@/lib/serverFetch';

interface LikeHeartButtonProps {
  count: number;
  postId: string;
}

async function LikeHeartButton({ count, postId }: LikeHeartButtonProps) {
  const isLiked = await getIsLiked(postId);
  const createLikeWithPostId = createLikeSA.bind(null, { postId });
  const deleteLikeWithPostId = deleteLikeSA.bind(null, { postId });

  return (
    <form action={isLiked ? deleteLikeWithPostId : createLikeWithPostId}>
      <button className="flex items-center gap-1 cursor-pointer" type="submit">
        <Heart
          className={clsx('!w-4 !h-4', {
            'fill-red500': isLiked,
            'stroke-none': isLiked,
          })}
        />
        {count}
      </button>
    </form>
  );
}

export default LikeHeartButton;
