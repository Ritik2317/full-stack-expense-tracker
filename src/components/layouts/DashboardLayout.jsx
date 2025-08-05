import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

function DashboardLayout({ children, activeMenu }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white flex flex-col">
      {/* Navbar */}
      <Navbar activeMenu={activeMenu} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar (for large screens) */}
        <aside className="hidden lg:block w-64 border-r dark:border-gray-800">
          <SideMenu activeMenu={activeMenu} />
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
