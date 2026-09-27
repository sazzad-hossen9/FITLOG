export default function Loading() {
  return (
    <div className="container px-5 mx-auto my-10 animate-pulse">
      <div className="h-8 w-40 rounded bg-white/10 mb-2" />
      <div className="h-4 w-72 rounded bg-white/10 mb-6" />

      <div className="grid grid-cols-3 gap-6 bg-[#141414] border border-white/5 rounded-2xl p-6 mb-6">
        <div>
          <div className="h-3 w-16 rounded bg-white/10 mb-2" />
          <div className="h-7 w-8 rounded bg-white/10" />
        </div>
        <div>
          <div className="h-3 w-16 rounded bg-white/10 mb-2" />
          <div className="h-7 w-8 rounded bg-white/10" />
        </div>
        <div>
          <div className="h-3 w-16 rounded bg-white/10 mb-2" />
          <div className="h-7 w-8 rounded bg-white/10" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="h-9 w-40 rounded-lg bg-white/10" />
        <div className="h-9 w-28 rounded-lg bg-white/10" />
      </div>

      <div className="bg-[#141414] border border-white/5 rounded-2xl min-h-[280px]" />
    </div>
  );
}
