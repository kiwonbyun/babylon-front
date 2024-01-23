import Button from '@/components/atoms/Button/Button';
import ImageCircle from '@/components/atoms/ImageCircle';
import { loginCheck } from '@/lib/serverActions';
import { getUser } from '@/lib/serverFetch';
import Link from 'next/link';
import React from 'react';

async function MyPage() {
  const token = await loginCheck();
  if (!token) return null;
  const user = await getUser({ id: token?.sub });

  return (
    <main className="h-screen">
      <section className="bg-slate900 text-white flex items-center gap-4 justify-center py-10">
        <ImageCircle alt="profile-image" src={user?.profileImage} />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">{user?.nickname}</h1>
          <Link href={'/mypage/edit'}>
            <Button className="w-fit text-black !py-1">프로필 수정</Button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-2 w-4/5 mx-auto pt-6 sm:flex sm:flex-col">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">내가 입찰한 미팅</h3>
          <div className="flex justify-center items-center h-40">
            준비중 입니다.
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">내가 찜한 미팅</h3>
          <div className="flex justify-center items-center h-40">
            준비중 입니다.
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyPage;
