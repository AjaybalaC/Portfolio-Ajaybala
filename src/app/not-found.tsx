import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050D1E] px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-slate-800 bg-[#0B1730] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">404</p>
        <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-6 text-gray-400">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
