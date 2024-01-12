import LabeledBox from '@/components/molecules/LabeledBox';
import { loginCheck } from '@/lib/serverActions';
import { getPostDetail } from '@/lib/serverFetch';
import dayjs from 'dayjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

async function BidPage({ params }: { params: { id: string } }) {
  const user = await loginCheck();
  const post = await getPostDetail({ id: params.id });

  if (!user) {
    redirect('/login');
  }

  return (
    <main className="w-4/5 m-auto flex mt-4 gap-5">
      <section className=" w-2/3">
        <h1 className="text-2xl font-semibold">식사권 경매 입찰</h1>
        <LabeledBox label="입찰 상품" className="my-6">
          <div className="flex gap-2">
            <Image
              alt="bid-product"
              src={post.thumbnails[0]}
              width={150}
              height={150}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
              placeholder="blur"
              blurDataURL={post.base64}
            />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">{post.title}</span>
              <span>
                미팅 날짜 :{' '}
                {dayjs(post.lectureDateTime).format('YYYY.MM.DD hh시 mm분')}
              </span>
              <span>멘토 : {post.mentor.name}</span>
            </div>
          </div>
        </LabeledBox>
      </section>
      <section className="w-1/3">
        <div className="border border-solid border-gray200 rounded h-96 p-4">
          <h2 className="text-xl">결제금액</h2>
        </div>
      </section>
    </main>
  );
}

export default BidPage;
