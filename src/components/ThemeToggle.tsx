import { Moon, Sun1 } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/features/theme/themeSlice";

const ThemeToggle = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(toggleDarkMode());
    // console.log(theme);
  };
  return (
    <span
      className="relative inline-flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
      onClick={themeToggle}
    >
      <Sun1
        size={24}
        variant="Bold"
        className={`${theme === "dark" ? "opacity-100" : "opacity-0"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 dark:text-neutral-300`}
      />
      <Moon
        size={24}
        variant="Bold"
        className={`${theme === "dark" ? "opacity-0" : "opacity-100"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 dark:text-neutral-300`}
      />
    </span>
  );
};

export default ThemeToggle;
