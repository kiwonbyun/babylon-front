import { getPostDetail } from '@/app/lib/serverFetch';
import React from 'react';

async function page({ params }: { params: { id: string } }) {
  const post = await getPostDetail({ id: params.id });
  console.log(post);

  return <div>page</div>;
}

export default page;
