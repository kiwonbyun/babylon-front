'use client';
import { fontEmoji } from '@/lib/fonts';
import { completeBidSA } from '@/lib/serverActions';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

type BidCompleteSearchParams = {
  imp_uid: string;
  merchant_uid: string;
};

function BidCompletePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: BidCompleteSearchParams;
}) {
  const productId = params.id;
  const { imp_uid, merchant_uid } = searchParams;
  const router = useRouter();

  useEffect(() => {
    completeBidSA({
      postId: +productId,
      data: { imp_uid: String(imp_uid), merchant_uid },
    })
      .then(() => {
        toast.success(`입찰에 성공했습니다.`);
        router.replace('/');
      })
      .catch(() => {
        toast.error('입찰에 실패했습니다. 고객센터로 문의해주세요.');
      });
  }, [productId, imp_uid, merchant_uid, router]);

  return (
    <main className="flex-col-box h-screen gap-10">
      <div className="flex gap-2">
        <h1 className="text-2xl font-semibold">입찰 진행중...</h1>
        <span className={clsx(fontEmoji.className, 'text-2xl')}>🚀</span>
      </div>
      <p>결제가 진행중입니다. 잠시만 기다려주세요.</p>
    </main>
  );
}

export default BidCompletePage;
