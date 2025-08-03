import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '@/utils/data';
import { UserContext } from '@/context/userContext';
import { useNavigate } from 'react-router';

function SideMenu({ activeMenu }) {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      localStorage.clear();
      clearUser();
      navigate('/login');
    } else {
      navigate(route);
    }
  };

  return (
    <div className="w-64 h-full bg-white dark:bg-black text-black dark:text-white p-6 border-r border-gray-300 dark:border-gray-700 flex flex-col gap-6">
      {/* User Info */}
      <div className="flex items-center gap-4 border-b pb-4 border-gray-300 dark:border-gray-700">
        {user?.profileImageURL ? (
          <img
            src={user.profileImageURL}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-lg font-semibold">
            {user?.fullName?.charAt(0) || "U"}
          </div>
        )}
        <h2 className="text-lg font-semibold truncate">{user?.fullName || "User"}</h2>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            onClick={() => handleClick(item.path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all
              ${activeMenu === item.label
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-900"
              }`}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
