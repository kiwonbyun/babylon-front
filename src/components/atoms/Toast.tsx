import { useToast } from '@/hooks/Custom/Toast/ToastProvider';
import React, { ReactNode, useEffect } from 'react';

// const Wrapper = styled(animated.div)`
//   margin-right: 16px;
//   margin-top: 16px;
//   width: 200px;

//   position: relative;
//   padding: 16px;
//   border: 1px solid #d7d7d7;
//   border-radius: 3px;
//   background: white;
//   box-shadow: 0px 4px 10px 0px #d7d7d7;
//   color: #494e5c;
// `;

const Toast = ({ children, id }: { children: ReactNode; id: number }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <div className="relative mx-auto max-w-fit bg-black px-6 py-4 rounded bg-opacity-30 flex justify-center">
      {children}
    </div>
  );
};

export default Toast;
