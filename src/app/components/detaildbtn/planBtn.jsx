"use client";
import { FitLogContext } from "@/app/context/context";
import { CalendarPlus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";
export default function PlanBtn({ exercise }) {
  const { plan, setPlan } = useContext(FitLogContext);
  const alreadyAdded = plan.some((item) => item.id === exercise.id);
  const handlePlanBtn = () => {
    if (!alreadyAdded) {
      setPlan([...plan, exercise]);
      toast.success(`Added ${exercise.name} to today's plan`);
    } else if (alreadyAdded) {
      toast.error(`${exercise.name} is already in your plan`);
    }
  };
  return (
    <div>
      <button
        onClick={() => handlePlanBtn()}
        className=" cursor-pointer flex text-[12px] md:text-[14px] items-center gap-2 px-2 md:px-5 py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-sm hover:bg-transparent hover:text-fit-white hover:border-fit-primary border transition-colors"
      >
        <CalendarPlus size={16} />
        Add to today s plan
      </button>
    </div>
  );
}
