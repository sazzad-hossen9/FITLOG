"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="font-oswald font-bold text-3xl text-fit-white uppercase mb-2">
        Something went wrong
      </h1>
      <p className="text-sm text-fit-accent mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="px-5 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
