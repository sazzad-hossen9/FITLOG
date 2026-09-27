import Image from "next/image";
import logo from "@/assets/logo.png";
export default function FooterPage() {
  return (
    <div className="border-t border-fit-accent mt-16">
      <div className="container mx-auto px-3 flex justify-between items-center py-10.5">
        <div className=" flex justify-center gap-3 items-center ">
          <Image src={logo} alt="logo" />
          <h2 className="text-fit-white font-extrabold text-sm loading-[20px] font-oswald">
            FITLOG
          </h2>
        </div>
        <div>
          <p className="text-fit-accent tex-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
}
