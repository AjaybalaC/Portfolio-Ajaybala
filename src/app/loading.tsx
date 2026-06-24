export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050D1E] text-white">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Loading
        </p>
      </div>
    </main>
  );
}
