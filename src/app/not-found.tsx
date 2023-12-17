'use client';

import Button from '@/components/atoms/Button';
import ReportForm from '@/components/templates/ReportForm';
import Link from 'next/link';
import React, { useState } from 'react';

export default function NotFound() {
  const [report, setReport] = useState(true);
  const toggleReport = () => setReport((prev) => !prev);

  return (
    <main className="pt-9">
      <section className="flex-col-box gap-8 w-3/4 sm:w-full mx-auto rounded-lg">
        <header className="text-8xl text-green400 font-bold tracking-widest">
          404
        </header>
        <article className="flex-col-box gap-4 text-center">
          <h2 className="text-2xl sm:text-xl">
            요청하신 페이지를 찾을 수 없습니다!
          </h2>
          <div className="flex-col-box tracking-wide text-base sm:text-sm">
            <p>요청하신 페이지가 존재하지 않거나, 잘못된 경로입니다.</p>
            <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
          </div>
        </article>
        <footer className="flex-box gap-5">
          <Link href="/">
            <Button>홈으로</Button>
          </Link>
          <Button className="bg-gray400 text-white" onClick={toggleReport}>
            오류 제보하기
          </Button>
        </footer>
      </section>
      {report && <ReportForm />}
    </main>
  );
}
