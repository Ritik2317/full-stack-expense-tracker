import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import { Button } from '../ui/button';
import { TiWeatherSunny } from 'react-icons/ti';
import { FaRegMoon } from 'react-icons/fa';

function Navbar({ activeMenu }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const toggleTheme = () => {
    const htmlClass = document.documentElement.classList;
    if (htmlClass.contains('dark')) {
      htmlClass.remove('dark');
      setIsDarkMode(false);
    } else {
      htmlClass.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black text-black dark:text-white shadow-md border-b border-gray-200 dark:border-gray-800 relative">
      <div className="flex items-center gap-4">
        <button
          className="text-2xl p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
        <h2 className="text-xl font-semibold">Expense Tracker</h2>
      </div>

      <Button
        onClick={toggleTheme}
        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isDarkMode ? <TiWeatherSunny size={20} /> : <FaRegMoon size={18} />}
      </Button>

      {openSideMenu && (
        <div className="absolute top-14 left-0 z-50">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
