import clsx from 'clsx';
import React from 'react';

function LabeledBox({
  children,
  label,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <h3 className="text-xl">{label}</h3>
      <div className="border-t-1 border-solid border-gray300 pt-2 mt-1">
        {children}
      </div>
    </div>
  );
}

export default LabeledBox;
