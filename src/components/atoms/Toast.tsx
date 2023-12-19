import React, { ReactNode } from 'react';

const Toast = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute top-1/6 right-1/2 translate-x-1/2 max-w-fit bg-gray900 px-6 py-4 rounded bg-opacity-50 flex justify-center border border-green900 text-white text-base">
      {children}
    </div>
  );
};

export default Toast;
