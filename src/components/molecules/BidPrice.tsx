import React from 'react';

function BidPrice({ price, label }: { price: string; label: string }) {
  return (
    <div className="flex-col-box gap-1">
      <span className="font-bold text-black text-lg">{price}</span>
      <span className="text-xs font-light text-gray900">{label}</span>
    </div>
  );
}

export default BidPrice;
