import React, { useState } from 'react';
import { LuEyeClosed, LuEye } from "react-icons/lu";

function Input({ value, onChange, placeholder, label, type }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-sm rounded-md bg-white-100 dark:bg-black border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white focus:border-black dark:focus:border-white transition duration-200"
        />
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 cursor-pointer"
          >
            {showPassword ? <LuEye size={18} /> : <LuEyeClosed size={18} />}
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
