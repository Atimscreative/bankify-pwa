import { Link } from "react-router-dom";
import LogoWhite from "../assets/logo-white.svg";
import LogoColor from "../assets/logo-color.svg";
import { HambergerMenu } from "iconsax-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <header className="border-b dark:bg-neutral-900">
      <nav className="wrapper flex items-center justify-between py-3">
        <Link to={"/"}>
          <img
            src={theme === "light" ? LogoColor : LogoWhite}
            width={200}
            height={62}
            alt="Bankco"
            className="w-[120px]"
          />
        </Link>
        <div>
          {/* TOP NAVS */}
          <div className="hidden space-x-10 lg:block">
            <Link
              to={"/"}
              className="font-medium text-slate-500 hover:text-green-600 dark:text-neutral-300 dark:hover:text-green-500"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="font-medium text-slate-500 hover:text-green-600 dark:text-neutral-300 dark:hover:text-green-500"
            >
              Features
            </Link>
            <Link
              to={"/"}
              className="font-medium text-slate-500 hover:text-green-600 dark:text-neutral-300 dark:hover:text-green-500"
            >
              Operations
            </Link>
            <Link
              to={"/"}
              className="font-medium text-slate-500 hover:text-green-600 dark:text-neutral-300 dark:hover:text-green-500"
            >
              Testimonials
            </Link>
          </div>

          <div className="inline-flex items-center gap-3">
            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* MOBILE MENUBAR */}
            <span className="inline-block lg:hidden dark:text-neutral-300">
              <HambergerMenu size={30} />
            </span>
          </div>
        </div>

        {/* HEADER BUTTONS */}
        <div className="hidden space-x-2 lg:block">
          <button className="rounded-md border border-slate-500 bg-transparent px-6 py-2 font-medium text-slate-500 duration-300 hover:border-green-500 hover:text-green-500 dark:border-neutral-300 dark:text-neutral-300">
            Login
          </button>
          <button className="rounded-md bg-green-500 px-6 py-2 font-medium text-white duration-300 hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
