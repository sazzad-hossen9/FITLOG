import getData from "@/app/data";
import ExerciseCard from "../components/shared/exerciseCard";

export default async function Exercise() {
  const trainingData = await getData();
  console.log(trainingData);
  return (
    <div className="container px-5 mx-auto  my-5 mt-18">
      <div className="text-center md:text-start mb-7">
        <h2 className=" font-oswald font-bold md:loading=[36px] text-[30px] text-fit-white">
          THE LIBRARY
        </h2>
        <p className="leading-3.5 text-sm text-fit-accent">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {trainingData.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
