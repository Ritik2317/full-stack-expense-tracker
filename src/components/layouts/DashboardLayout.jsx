import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

function DashboardLayout({ children, activeMenu }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      {/* Navbar */}
      <Navbar activeMenu={activeMenu} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar: visible only for large screens */}
        <div className="hidden lg:block">
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
