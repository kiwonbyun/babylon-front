'use client';
import React, { useOptimistic } from 'react';
import Heart from '../icons/Heart';
import clsx from 'clsx';
import { postLikeSA } from '@/lib/serverActions';
import { toast } from 'sonner';

interface LikeHeartButtonProps {
  count: number;
  postId: string;
  isLiked: boolean;
}

type OptimisticState = { count: number; isLiked: boolean };

function LikeHeartButton({ count, postId, isLiked }: LikeHeartButtonProps) {
  const initState = { count, isLiked };
  const updateAction = (prevState: OptimisticState, newIsLike: boolean) => {
    const increment = newIsLike ? -1 : 1;
    return {
      count: prevState.count + increment,
      isLiked: !prevState.isLiked,
    };
  };

  const [optimisticLike, addOptimisticLike] = useOptimistic(
    initState,
    updateAction
  );

  return (
    <div
      onClick={() => {
        if (typeof isLiked !== 'boolean') {
          toast.error('로그인이 필요합니다');
          return;
        }
        addOptimisticLike(optimisticLike.isLiked);
        postLikeSA({ postId });
      }}
      className="flex items-center gap-1 cursor-pointer"
    >
      <Heart
        className={clsx('!w-4 !h-4', {
          'fill-red500': optimisticLike.isLiked === true,
          'stroke-none': optimisticLike.isLiked === false,
        })}
      />
      {optimisticLike.count}
    </div>
  );
}

export default LikeHeartButton;
