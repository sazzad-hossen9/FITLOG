import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="font-oswald font-bold text-5xl text-fit-white mb-2">
        404
      </h1>
      <h2 className="font-oswald font-bold text-xl text-fit-white uppercase mb-2">
        Page not found
      </h2>
      <p className="text-sm text-fit-accent mb-6">
        The page you re looking for doesn t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm"
      >
        Go to workouts
      </Link>
    </div>
  );
}
