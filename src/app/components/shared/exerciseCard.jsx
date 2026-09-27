import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExerciseCard({ exercise }) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <Link href={`/exercise/${id}`} className="block">
      <div className="rounded-2xl overflow-hidden bg-fit-secondary border border-white/5 hover:border-white/20 transition-colors">
        <div>
          <Image src={image} alt={name} width={600} height={300} />
        </div>

        <div className="p-5">
          <div className="flex gap-2 mb-4">
            {muscleGroups.map((group, ind) => (
              <span
                key={ind}
                className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold uppercase tracking-wide"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="font-oswald font-bold text-[18px] loading=[28px] text-fit-white uppercase mb-1">
            {name}
          </h3>
          <p className="text-sm text-fit-accent mb-4">{equipment}</p>

          <div className="divider bg-fit-accent h-0.75"></div>

          <div />
          <div className="flex items-center gap-5 text-sm text-fit-accent">
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
    </Link>
  );
}
