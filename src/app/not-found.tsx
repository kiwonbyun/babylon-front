import Button from '@/components/atoms/Button/Button';
import ReportForm from '@/components/templates/ReportForm';
import { fontEmoji } from '@/lib/fonts';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="pt-9">
      <section className="flex-col-box gap-8 w-3/4 sm:w-full mx-auto rounded-lg">
        <header className="text-red600 font-bold tracking-widest text-8xl">
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
        </footer>
      </section>
      <ReportForm
        header={
          <h1>
            오류를 제보해 주시면 빠르게 해결하겠습니다{' '}
            <span className={fontEmoji.className}>😅</span>
          </h1>
        }
      />
    </main>
  );
}
