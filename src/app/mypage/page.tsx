import { loginCheck } from '@/lib/serverActions';
import React from 'react';

async function MyPage() {
  const user = await loginCheck();

  return <div>asd</div>;
}

export default MyPage;
