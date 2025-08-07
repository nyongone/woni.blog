export default function Loading() {
  return (
    <div className="relative m-[0_auto] w-[min(768px,100%)]">
      <div className="flex flex-col items-start justify-start gap-20 pt-12">
        <div className="h-12 w-2/3 rounded-xl bg-zinc-100 dark:bg-zinc-700"></div>
        <div className="flex h-auto w-full flex-col items-start justify-start gap-4">
          <div className="h-6 w-full rounded-lg bg-zinc-100 dark:bg-zinc-700"></div>
          <div className="h-6 w-full rounded-lg bg-zinc-100 dark:bg-zinc-700"></div>
          <div className="h-6 w-2/3 rounded-lg bg-zinc-100 dark:bg-zinc-700"></div>
        </div>
      </div>
    </div>
  );
}
