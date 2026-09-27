"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FitLogContext } from "@/app/context/context";
import PlanListItem from "./PlanListItem";
// import PlanListItem from "@/app/components/plan/PlanListItem";

const sortFunctions = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => b.caloriesBurned - a.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

export default function MyPlanPage() {
  const { plan, setPlan, save, setSave } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const activeList = activeTab === "plan" ? plan : save;
  const sortedList = [...activeList].sort(sortFunctions[sortBy]);

  const totalMinutes = activeList.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activeList.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setPlan(plan.filter((item) => item.id !== id));
    } else {
      setSave(save.filter((item) => item.id !== id));
    }
  };

  const handleMarkDone = (item) => {
    setPlan(plan.filter((p) => p.id !== item.id));
    toast.success(`${item.name} marked as done`);
  };

  return (
    <div className="container px-5 mx-auto my-10">
      <h1 className="font-oswald font-bold text-3xl text-fit-white uppercase mb-1">
        My Plan
      </h1>
      <p className="text-sm text-fit-accent mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3 gap-6 bg-[#141414] border border-white/5 rounded-2xl p-6 mb-6">
        <div>
          <p className="text-xs text-fit-accent mb-1">Exercises</p>
          <p className="text-2xl font-bold text-lime-400">
            {activeList.length}
          </p>
        </div>
        <div>
          <p className="text-xs text-fit-accent mb-1">Minutes</p>
          <p className="text-2xl font-bold text-fit-white">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-xs text-fit-accent mb-1">Calories</p>
          <p className="text-2xl font-bold text-fit-white">{totalCalories}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 bg-[#141414] border border-white/5 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-4 py-1.5 rounded-md text-sm font-semibold ${
              activeTab === "plan" ? "bg-white text-black" : "text-fit-accent"
            }`}
          >
            Today s Plan
          </button>
          <button
            onClick={() => setActiveTab("save")}
            className={`px-4 py-1.5 rounded-md text-sm font-semibold ${
              activeTab === "save"
                ? "bg-fit-white text-fit-white"
                : "text-fit-accent"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-5">
          <h2 className="text-fit-accent text-2xl hidden sm:inline">sortBy</h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#141414] border border-fit-accent md:p-3 text-sm text-fit-white  rounded-lg px-3 py-1.5"
          >
            <option value="duration"> Duration</option>
            <option value="calories"> Calories</option>
            <option value="rating"> Rating</option>
          </select>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="bg-[#141414] border border-white/5 rounded-2xl min-h-[280px] flex items-center justify-center">
          <div className="text-center py-16">
            <h3 className="font-oswald font-bold text-fit-white uppercase mb-1">
              Nothing here yet
            </h3>
            <p className="text-sm text-fit-accent mb-5">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block px-5 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm"
            >
              Go to workouts
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedList.map((item) => (
            <PlanListItem
              key={item.id}
              exercise={item}
              variant={activeTab}
              onRemove={() => handleRemove(item.id)}
              onMarkDone={() => handleMarkDone(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
