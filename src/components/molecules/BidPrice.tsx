import clsx from 'clsx';
import React from 'react';

interface BidPriceProps {
  price: string;
  label: string;
  axis?: 'x' | 'y';
}

function BidPrice({ price, label, axis = 'y' }: BidPriceProps) {
  if (axis === 'x') {
    return (
      <div className="flex gap-1 items-center">
        <span className="font-light text-gray600">{label}</span>
        <span className="font-bold text-black">{price}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="font-bold text-black text-lg">{price}</span>
      <span className="text-xs font-light text-gray900">{label}</span>
    </div>
  );
}

export default BidPrice;
