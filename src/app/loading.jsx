export default function Loading() {
  return (
    <div className="container px-5 mx-auto my-10 animate-pulse">
      {/* Hero section */}
      <div className="rounded-2xl bg-[#141414] border border-white/5 p-8 mb-10 flex items-center justify-between">
        <div className="flex-1">
          <div className="h-3 w-32 rounded bg-white/10 mb-3" />
          <div className="h-8 w-full max-w-md rounded bg-white/10 mb-2" />
          <div className="h-8 w-2/3 rounded bg-white/10 mb-4" />
          <div className="h-4 w-full max-w-lg rounded bg-white/10 mb-1.5" />
          <div className="h-4 w-3/4 rounded bg-white/10 mb-5" />
          <div className="h-10 w-44 rounded-lg bg-white/10" />
        </div>
        <div className="w-40 h-40 rounded-xl bg-white/10 hidden md:block" />
      </div>

      {/* Section title */}
      <div className="h-6 w-32 rounded bg-white/10 mb-1" />
      <div className="h-4 w-64 rounded bg-white/10 mb-6" />

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-[#141414] border border-white/5"
          >
            <div className="w-full aspect-[4/3] bg-white/10" />
            <div className="p-5">
              <div className="flex gap-2 mb-4">
                <div className="h-5 w-14 rounded-full bg-white/10" />
                <div className="h-5 w-14 rounded-full bg-white/10" />
              </div>
              <div className="h-5 w-3/4 rounded bg-white/10 mb-2" />
              <div className="h-3 w-1/2 rounded bg-white/10 mb-4" />
              <div className="h-px bg-white/10 mb-4" />
              <div className="flex gap-4">
                <div className="h-3 w-10 rounded bg-white/10" />
                <div className="h-3 w-12 rounded bg-white/10" />
                <div className="h-3 w-8 rounded bg-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
