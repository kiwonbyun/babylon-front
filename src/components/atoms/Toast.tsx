import clsx from 'clsx';
import React, { ReactNode } from 'react';

const Toast = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'success' | 'error';
}) => {
  return (
    <div
      className={clsx(
        'absolute top-1/6 right-1/2 translate-x-1/2 max-w-fit px-6 py-4 rounded bg-opacity-50 text-white text-base sm:text-sm break-keep',
        {
          'bg-gray900': type === 'success',
          'bg-red700': type === 'error',
        }
      )}
    >
      {children}
    </div>
  );
};

export default Toast;
