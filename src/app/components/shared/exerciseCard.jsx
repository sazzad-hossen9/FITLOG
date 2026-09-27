import { Clock, Flame, Star } from "lucide-react";

export default function ExerciseCard({ exercise }) {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <div className="rounded-2xl overflow-hidden bg-[#141414] border border-white/5">
      <div className="relative w-full aspect-[4/3]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <div className="flex gap-2 mb-4">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold uppercase tracking-wide"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-oswald font-bold text-2xl text-fit-white uppercase mb-1">
          {name}
        </h3>
        <p className="text-sm text-fit-accent mb-4">{equipment}</p>

        <div className="h-px bg-white/10 mb-4" />

        <div className="flex items-center gap-5 text-sm text-fit-white/80">
          <span className="flex items-center gap-1.5">
            <Clock size={16} />
            {duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame size={16} />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5 ml-auto">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
