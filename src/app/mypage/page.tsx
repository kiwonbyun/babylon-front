import Button from '@/components/atoms/Button/Button';
import ImageCircle from '@/components/atoms/ImageCircle';
import {
  MyBidsSkeleton,
  MyFavoriteSkeleton,
} from '@/components/molecules/skeletons';
import MyBids from '@/components/templates/Mypage/MyBids';
import MyFavorite from '@/components/templates/Mypage/MyFavorite';
import { loginCheck } from '@/lib/serverActions';
import { getUser } from '@/lib/serverFetch';
import { LoginUser } from '@/types/authInterface';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'MyPage',
};

async function MyPage() {
  const token = await loginCheck();
  if (!token) return null;
  const user = (await getUser({ id: token.sub })) as LoginUser;

  return (
    <main className="min-h-screen">
      <section className="bg-slate900 text-white flex items-center gap-4 justify-center py-10">
        <ImageCircle alt="profile-image" src={user?.profileImage} />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">{user?.nickname}</h1>
          <Link href={'/mypage/edit'}>
            <Button className="w-fit text-black !py-1">프로필 수정</Button>
          </Link>
        </div>
      </section>
      <section className="w-4/5 mx-auto pt-6 flex md:flex-col sm:flex-col sm:gap-4 md:gap-4">
        <Suspense fallback={<MyBidsSkeleton />}>
          <MyBids />
        </Suspense>
        <Suspense fallback={<MyFavoriteSkeleton />}>
          <MyFavorite />
        </Suspense>
      </section>
    </main>
  );
}

export default MyPage;
