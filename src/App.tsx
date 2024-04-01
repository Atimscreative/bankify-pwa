import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialTheme } from "./redux/features/theme/themeSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch(initialTheme("dark"));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(initialTheme("light"));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="" element={<DashboardLayout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
