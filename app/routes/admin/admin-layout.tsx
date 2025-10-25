import React from "react";

import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
      <aside className="childred">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
