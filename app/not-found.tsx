import Link from "next/link";

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <span className="text-2xl font-semibold text-zinc-700">
        페이지를 찾을 수 없습니다.
      </span>
      <Link
        href="/"
        className="text-zinc-400 hover:text-blue-400 hover:underline hover:underline-offset-4"
      >
        메인으로 돌아가기
      </Link>
    </div>
  );
}
