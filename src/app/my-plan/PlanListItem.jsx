import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";

export default function PlanListItem({
  exercise,
  variant,
  onRemove,
  onMarkDone,
}) {
  const { id, name, image, equipment, duration, caloriesBurned, rating } =
    exercise;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-fit-secondary  border border-white/5 rounded-xl px-4 py-3 gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        <div>
          <h4 className="font-oswald font-bold text-sm text-fit-white uppercase">
            {name}
          </h4>
          <p className="text-xs text-fit-accent">{equipment}</p>
          <div className="flex items-center gap-3 text-xs text-fit-accent mt-1">
            <span className="flex items-center gap-1">
              <Clock className="text-fit-primary" size={12} /> {duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame className="text-fit-primary" size={12} /> {caloriesBurned}{" "}
              kcal
            </span>
            <span className="flex items-center gap-1">
              <Star className="text-fit-primary" size={12} /> {rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/exercise/${id}`}
          className="flex-1 md:flex-none text-center px-4 py-2 rounded-lg border border-white/10 text-fit-white text-sm font-semibold"
        >
          View Details
        </Link>

        {variant === "plan" && (
          <button
            onClick={onMarkDone}
            className="flex items-center justify-center gap-1.5 flex-1 md:flex-none px-4 py-2 rounded-lg bg-lime-400 text-black text-sm font-semibold"
          >
            <Check size={14} />
            Mark as Done
          </button>
        )}

        <button onClick={onRemove} className="p-2 text-fit-accent">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
