import clsx from 'clsx';

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent';

function SkeletonLine({ className }: { className?: string }) {
  return <div className={clsx(`w-60 bg-gray200 rounded`, className)} />;
}

function MainPost() {
  return (
    <div className={`${shimmer} grid grid-cols-2 gap-4 w-[90%] mx-auto mb-12`}>
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
    <div className={`${shimmer} grid grid-cols-3 gap-4 w-[90%] mx-auto`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="flex flex-col gap-1" key={i}>
          <SkeletonLine className="w-full aspect-video" />
          <SkeletonLine className="h-7 w-[80%]" />
          <SkeletonLine className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  );
}

export function MainPostsSkeleton() {
  return (
    <div className="my-12">
      <MainPost />
      <RestPosts />
    </div>
  );
}
