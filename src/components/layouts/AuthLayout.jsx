import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { TiWeatherSunny } from 'react-icons/ti';
import { FaRegMoon } from 'react-icons/fa';

function AuthLayout({children}) {
    useEffect(() => {
        const htmlClass = document.documentElement.classList;
        setIsDarkMode(htmlClass.contains('dark'));
    }, []);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.classList.contains('dark');
    });
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
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Expense Tracker</h2>
          <Button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:cursor-pointer border border-gray-400 dark:border-gray-600 transition duration-300"
          >
            {isDarkMode ? <TiWeatherSunny size={20} /> : <FaRegMoon size={20} />}
          </Button>
        </div>

        {/* Content (Login / Sign up Form) */}
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 items-center justify-center">
        <img
        src={isDarkMode ? '/Login-Dark.png' : '/Login-Light.png'}
        alt="Login Illustration"
        className="max-w-full h-auto object-contain"
        />
    </div>
    </div>
  )
}

export default AuthLayout