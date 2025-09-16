import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
