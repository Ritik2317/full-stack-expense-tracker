import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

function InfoCard({icon,label,value}) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 transition-all hover:shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h6 className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</h6>
            <span className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-1">
            <FaRupeeSign className="text-base" />
            {value}
            </span>
        </div>
    </div>
  )
}

export default InfoCard