import { loginCheck } from '@/lib/serverActions';
import { getPostDetail } from '@/lib/serverFetch';
import { redirect } from 'next/navigation';
import React from 'react';

async function BidPage({ params }: { params: { id: string } }) {
  const user = await loginCheck();
  const post = await getPostDetail({ id: params.id });

  if (!user) {
    redirect('/');
  }

  return <div>BidPage</div>;
}

export default BidPage;
