import React, { memo } from 'react';

function PartDivider({ children }: { children: React.ReactNode[] }) {
  return (
    <div>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index !== children.length - 1 && (
            <div className={`border-t-1 border-solid border-gray300`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default memo(PartDivider);
