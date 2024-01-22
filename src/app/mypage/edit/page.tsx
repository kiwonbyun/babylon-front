import React from 'react';
import { loginCheck } from '@/lib/serverActions';
import EditForm from '@/components/templates/Mypage/EditForm';
import { getUser } from '@/lib/serverFetch';

async function page() {
  const loginUser = await loginCheck();
  if (!loginUser) return null;
  const user = await getUser({ id: loginUser.sub });

  return (
    <main className="w-4/5 mx-auto h-screen flex flex-col items-center pt-20">
      <EditForm user={user} />
    </main>
  );
}

export default page;
