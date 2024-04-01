import { Outlet } from "react-router-dom";
import MobileNav from "../components/dashboard-components/MobileNav";

const DashboardLayout = () => {
  return (
    <>
      <div className="px-4">
        <Outlet />
      </div>
      <MobileNav />
    </>
  );
};

export default DashboardLayout;
