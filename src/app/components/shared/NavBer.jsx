import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
export default function NavBer() {
  const navLink = (
    <>
      <li>
        <Link href="/" className="nav-link ">
          Workouts
        </Link>
      </li>

      <li>
        <Link href="/" className="nav-link ">
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-transparent ">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-fit-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" />
            <Link
              href="/"
              className=" font-extrabold text-fit-white text-[18px]"
            >
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link href="/" className="text-fit-accent text-sx">
            Plan{" "}
            <span className="hover:bg-fit-primary border hover:text-fit-black font-bold text-fit-white p-1 rounded-full  px-2 ml-2">
              0
            </span>
          </Link>
          <Link href="/" className="text-sx text-fit-accent">
            Saved{" "}
            <span className="hover:bg-fit-primary border hover:text-fit-black font-bold text-fit-white  p-1 rounded-full px-2  ml-2">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
