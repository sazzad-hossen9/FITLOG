import Image from "next/image";
import { CalendarPlus, Bookmark } from "lucide-react";
import getData from "@/app/data";

export default async function ExerciseDetailPage({ params }) {
  
  const { id } = await params;
  const exercises = await getData();
  const exercise = exercises.find((item) => item.id === Number(id));

  if (!exercise) {
    return <div className="text-white p-10">Exercise not found</div>;
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = exercise;

  return (
    <div className="container px-5 mx-auto my-10 mt-25">
      <div className="grid  md:grid-cols-2 gap-10">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="font-oswald font-bold text-4xl text-fit-white uppercase mb-2">
            {name}
          </h1>
          <p className="text-fit-accent text-sm mb-4">{description}</p>

          <div className="flex gap-2 mb-6">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold uppercase tracking-wide"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/5 mb-8">
            <div className="text-white">
              {/* 1 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  EQUIPMENT
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">
                  {equipment}
                </h3>
              </div>
              {/* 2 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  DIFFICULTY
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">
                  {difficulty}
                </h3>
              </div>
              {/* 3 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  SETS
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">{sets}</h3>
              </div>
              {/* 4 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  REPS
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">{reps}</h3>
              </div>
              {/* 5 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  DURATION
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">{duration}</h3>
              </div>
              {/* 6 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  CALORIES
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">
                  {caloriesBurned}
                </h3>
              </div>
              {/* 7 */}
              <div className="flex justify-between py-4 px-6">
                <h3 className="text-[12px] leading-4 font-extrabold text-fit-accent">
                  RATING
                </h3>
                <h3 className="text-sm font-bold loading-[20px]">{rating}</h3>
              </div>
            </div>
          </div>

          <h2 className="font-oswald font-bold text-lg text-fit-white uppercase mb-3">
            Instructions
          </h2>
          <ol className="space-y-2 mb-8 text-sm text-fit-accent">
            {instructions.map((step, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-fit-accent font-semibold">
                  {idx + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="flex gap-4">
            <button className="flex text-[12px] md:text-[14px] items-center gap-2 px-2 md:px-5 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm hover:bg-transparent hover:text-fit-white hover:border-fit-primary border transition-colors">
              <CalendarPlus size={16} />
              Add to today s plan
            </button>
            <button className="flex text-[12px] md:text-[14px] items-center gap-2 px-5 py-2.5 rounded-lg border border-fit-accent text-fit-white font-semibold text-sm hover:bg-fit-primary hover:text-fit-black transition-colors">
              <Bookmark size={16} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
