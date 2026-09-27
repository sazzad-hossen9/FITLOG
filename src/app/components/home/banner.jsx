import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/assets/banner.png";

const BannerPage = () => {
  return (
    <section  className="bg-fitTheme my-[48px] mt-25">
      <div className="container mx-auto px-5 ">
        <div className=" flex flex-col md:flex-row  text-center md:text-start gap-7  justify-between items-center  rounded-xl bg-fit-secondary px-6 py-12 md:py-18.25 md:px-10 lg:px-14">
          {/* Content */}
          <div className=" ">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-fit-primary">
              Workout Library
            </p>

            <h1 className="xl:w-145 font-oswald  text-4xl font-black uppercase   text-fit-white md:text-4xl lg:text-6xl">
              Train With Intent.Log Every Set.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-fit-accent">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today s plan, and watch the week s work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex rounded-md bg-fitPrimary px-5 py-3 text-xs font-bold uppercase text-black transition duration-300 hover:bg-transparent border-2  hover:border-fit-primary hover:text-fit-white  bg-fit-primary"
            >
              Browse Workouts
            </Link>
          </div>

          <div>
            <Image
              src={banner}
              alt="Workout illustration"
              width={330}
              height={330}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
