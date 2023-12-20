'use client';

import { useToast } from '@/hooks/Custom/Toast/ToastProvider';
import ThrottleButton from '@/components/atoms/Button/ThrottleButton';

function Posts() {
  const { addToast } = useToast();
  return (
    <div>
      page
      <ThrottleButton onClick={() => addToast.error('에러발생!', 500)}>
        sad
      </ThrottleButton>
    </div>
  );
}

export default Posts;
