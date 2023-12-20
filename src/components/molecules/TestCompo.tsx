'use client';
import React from 'react';
import Button from '@/components/atoms/Button/Button';
import { useToast } from '@/hooks/Custom/Toast/ToastProvider';

function TestCompo() {
  const { addToast } = useToast();
  return (
    <ul>
      <Button onClick={() => addToast.success('toast메세지가 발생했습니다!!')}>
        sad
      </Button>
    </ul>
  );
}

export default TestCompo;
