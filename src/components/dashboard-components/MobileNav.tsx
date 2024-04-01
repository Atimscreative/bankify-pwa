import { Home2, Note1, UserSquare, Wallet } from "iconsax-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full border-t border-t-slate-200 md:hidden dark:bg-gray-900">
      <div className="flex justify-around px-4 py-4">
        <Link
          to={"/dashboard"}
          className="group inline-flex flex-col items-center"
        >
          <Home2
            size={32}
            variant="Bold"
            className="text-slate-500 duration-300 group-hover:text-green-500"
          />
          <span className="mt-1 hidden text-sm tracking-wider text-slate-500 duration-300 group-hover:text-green-500">
            Home
          </span>
        </Link>
        <Link
          to={"/dashboard"}
          className="group inline-flex flex-col items-center"
        >
          <Wallet
            size={32}
            variant="Bold"
            className="text-slate-500 duration-300 group-hover:text-green-500"
          />
          <span className="mt-1 hidden text-sm tracking-wider text-slate-500 duration-300 group-hover:text-green-500">
            My Wallet
          </span>
        </Link>
        <Link
          to={"/dashboard"}
          className="group inline-flex flex-col items-center"
        >
          <Note1
            size={32}
            variant="Bold"
            className="text-slate-500 duration-300 group-hover:text-green-500"
          />
          <span className="mt-1 hidden text-sm tracking-wider text-slate-500 duration-300 group-hover:text-green-500">
            Transactions
          </span>
        </Link>
        <Link
          to={"/dashboard"}
          className="group inline-flex flex-col items-center"
        >
          <UserSquare
            size={32}
            variant="Bold"
            className="text-slate-500 duration-300 group-hover:text-green-500"
          />
          <span className="mt-1 hidden text-sm tracking-wider text-slate-500 duration-300 group-hover:text-green-500">
            Profile
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
