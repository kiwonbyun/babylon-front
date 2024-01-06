import React, { memo } from 'react';

function PartDivider({
  children,
  level = 1,
}: {
  children: React.ReactNode[];
  level?: number;
}) {
  return (
    <div>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index !== children.length - 1 && (
            <div
              className={`border-t-[${level}px] first:border-none border-solid border-gray300`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default memo(PartDivider);
