import { Outlet } from "react-router-dom";

import AuthImageSection from "../features/auth/components/AuthImageSection";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <AuthImageSection />
      <div className="flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
