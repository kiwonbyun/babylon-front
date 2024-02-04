import React from 'react';
import { loginCheck } from '@/lib/serverActions';
import EditForm from '@/components/templates/Mypage/EditForm';
import { getUser } from '@/lib/serverFetch';
import { LoginUser, TokenUser } from '@/types/authInterface';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Profile',
};

async function page() {
  const loginUser = (await loginCheck()) as TokenUser;
  const user = (await getUser({ id: loginUser?.sub })) as LoginUser;

  return (
    <main className="w-4/5 mx-auto h-screen flex flex-col items-center pt-20">
      <EditForm user={user} />
    </main>
  );
}

export default page;
