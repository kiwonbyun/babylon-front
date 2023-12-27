import React from 'react';

interface DividerProps {
  className?: string;
  children: React.ReactNode;
}

const Divider = ({ className, children }: DividerProps) => {
  return (
    <div className={className}>
      <div className="border-t border-solid border-gray300" />
      <div className="flex-box">
        <span className="relative bottom-3 text-md bg-white px-2 text-gray300 font-light">
          {children}
        </span>
      </div>
    </div>
  );
};

export default Divider;
