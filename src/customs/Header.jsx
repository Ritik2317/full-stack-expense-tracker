import React, { useEffect, useState } from 'react';
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegMoon } from "react-icons/fa";
import { Button } from '@/components/ui/button';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
     <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black transition-colors duration-300">
      <a href='/'><img
        src={isDarkMode ? '/logo-nobg.png' : '/logo.png'}
        alt="Logo"
        className="h-10 cursor-pointer hover:opacity-80 transition"
      />
      </a>
      <Button
        onClick={toggleTheme}
        className="rounded-full p-2 hover:cursor-pointer"
      >
        {isDarkMode ? <TiWeatherSunny size={20} /> : <FaRegMoon size={18} />}
      </Button>
    </header>
  );
}

export default Header;
