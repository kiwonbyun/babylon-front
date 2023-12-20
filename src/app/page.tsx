'use client';

import Button from '@/components/atoms/Button/Button';
import { useToast } from '@/hooks/Custom/Toast/ToastProvider';

export default function Home() {
  const { addToast } = useToast();
  return (
    <main>
      <h1>cd</h1>
      <h2>누구십니까</h2>
      <h3>안녕하세요</h3>
      <ul>
        <Button
          onClick={() =>
            addToast.success('toast메세지가 발생했습니다!!', 20000)
          }
        >
          sad
        </Button>
      </ul>
    </main>
  );
}
