import clsx from 'clsx';

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent';

function SkeletonLine({ className }: { className?: string }) {
  return <div className={clsx(`w-60 bg-gray200 rounded`, className)} />;
}

function MainPost() {
  return (
    <div className={`${shimmer} grid grid-cols-2 gap-4 mb-12`}>
      <div className="aspect-video flex flex-col justify-center gap-5">
        <SkeletonLine className="w-96 h-9" />
        <SkeletonLine className="w-[100px] h-[20px]" />
        <SkeletonLine className="w-4/5 h-[100px]" />
        <div className="flex justify-between gap-28 w-[80%] h-12">
          <SkeletonLine className="h-full" />
          <SkeletonLine className="h-full" />
          <SkeletonLine className="h-full" />
        </div>
      </div>
      <div className="bg-gray200 aspect-video"></div>
    </div>
  );
}

function RestPosts() {
  return (
    <div className={`${shimmer} grid grid-cols-3 gap-4`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="flex flex-col gap-1" key={i}>
          <SkeletonLine className="w-full aspect-video" />
          <SkeletonLine className="h-6 w-[80%]" />
          <SkeletonLine className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  );
}

export function MainPostsSkeleton() {
  return (
    <div className="my-12 w-[90%] mx-auto">
      <SkeletonLine className="!w-24 h-7" />
      <MainPost />
      <RestPosts />
    </div>
  );
}

export function MyBidsSkeleton() {
  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-5">내가 입찰한 미팅</h3>
      <ul className="flex flex-col gap-2 ">
        {Array.from({ length: 2 }).map((_, idx) => (
          <li key={idx}>
            <div className="border border-solid border-gray200 rounded px-4 py-2 lg:w-[90%] flex flex-col gap-2">
              <span className="flex text-xs text-gray600 gap-2">
                입찰날짜 • <SkeletonLine className="!w-24 h-4" />
              </span>
              <section className="flex gap-2 items-start">
                <div className="relative aspect-video w-40">
                  <SkeletonLine className="w-full aspect-video rounded-none" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold line-clamp-1">
                    <SkeletonLine className="!w-56 h-4" />
                  </h3>
                  <div className="text-sm text-gray600 flex sm:flex-col gap-2 items-center">
                    <span>미팅 날짜 : </span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                  <div className="font-semibold text-sm flex sm:flex-col gap-2 items-center">
                    <span>현재 최고 입찰가 :</span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                  <div className="font-semibold text-red500 text-sm flex sm:flex-col gap-2 items-center">
                    <span>내 입찰가 :</span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MyFavoriteSkeleton() {
  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-5">내가 찜한 미팅</h3>
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 2 }).map((_, idx) => (
          <li key={idx}>
            <div className="border border-solid border-gray200 rounded px-4 py-2 lg:w-[90%] flex flex-col gap-2">
              <section className="flex gap-2 items-start">
                <div className="relative aspect-video w-40">
                  <SkeletonLine className="w-full aspect-video rounded-none" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold line-clamp-1">
                    <SkeletonLine className="!w-48 h-4" />
                  </h3>
                  <div className="text-sm text-gray600 flex sm:flex-col items-center gap-2">
                    <span>미팅 날짜 :</span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                  <div className="text-sm text-gray600 flex sm:flex-col items-center gap-2">
                    <span>미팅 카테고리 :</span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                  <div className="font-semibold text-sm flex sm:flex-col items-center gap-2">
                    <span>현재 최고 입찰가 :</span>
                    <SkeletonLine className="!w-24 h-4" />
                  </div>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
