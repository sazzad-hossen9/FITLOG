export default function ExerciseDetailSkeleton() {
  return (
    <div className="container px-5 mx-auto my-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-white/10" />

        <div>
          <div className="h-9 w-3/4 rounded bg-white/10 mb-3" />
          <div className="h-4 w-full rounded bg-white/10 mb-1.5" />
          <div className="h-4 w-2/3 rounded bg-white/10 mb-4" />

          <div className="flex gap-2 mb-6">
            <div className="h-6 w-16 rounded-full bg-white/10" />
            <div className="h-6 w-16 rounded-full bg-white/10" />
          </div>

          <div className="rounded-xl overflow-hidden border border-white/5 mb-8">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div key={idx} className="flex justify-between py-4 px-6">
                <div className="h-3 w-20 rounded bg-white/10" />
                <div className="h-3 w-16 rounded bg-white/10" />
              </div>
            ))}
          </div>

          <div className="h-5 w-32 rounded bg-white/10 mb-3" />
          <div className="space-y-2.5 mb-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="h-3.5 w-full rounded bg-white/10" />
            ))}
          </div>

          <div className="flex gap-4">
            <div className="h-10 w-40 rounded-lg bg-white/10" />
            <div className="h-10 w-36 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
