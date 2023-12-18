'use client';

import { useToast } from '@/hooks/Custom/Toast/ToastProvider';

export default function Home() {
  const { addToast } = useToast();
  return (
    <main>
      <h1>cd</h1>
      <h2>누구십니까</h2>
      <h3>안녕하세요</h3>
      <ul>
        <li onClick={() => addToast('d')}>sad</li>
      </ul>
    </main>
  );
}
