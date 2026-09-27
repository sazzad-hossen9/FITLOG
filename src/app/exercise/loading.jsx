export default function ExerciseCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#141414] border border-white/5 animate-pulse">
      <div className="relative w-full aspect-[4/3] bg-white/10" />

      <div className="p-5">
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-16 rounded-full bg-white/10" />
          <div className="h-6 w-16 rounded-full bg-white/10" />
        </div>

        <div className="h-6 w-3/4 rounded bg-white/10 mb-2" />
        <div className="h-4 w-1/2 rounded bg-white/10 mb-4" />

        <div className="h-px bg-white/10 mb-4" />

        <div className="flex items-center gap-5">
          <div className="h-4 w-12 rounded bg-white/10" />
          <div className="h-4 w-14 rounded bg-white/10" />
          <div className="h-4 w-10 rounded bg-white/10 ml-auto" />
        </div>
      </div>
    </div>
  );
}
