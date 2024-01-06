import { fontPoppinsEN } from '@/app/lib/fonts';
import React from 'react';

function Footer() {
  return (
    <div className="h-40 bg-black mt-20 px-10 py-5 flex flex-col gap-2">
      <h1
        className={`text-white font-bold text-3xl ${fontPoppinsEN.className}`}
      >
        BABYLON
      </h1>
      <section>
        <span
          className={`text-white font-light text-sm ${fontPoppinsEN.className}`}
        >
          Contact us : bkw9603@gmail.com
        </span>
      </section>
    </div>
  );
}

export default Footer;
