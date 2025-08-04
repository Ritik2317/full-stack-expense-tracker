import React from 'react'
import { LuIndianRupee } from 'react-icons/lu'

function CustomTooltip({active,payload}) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-md shadow-md text-sm">
            <p className="text-gray-700 dark:text-gray-200 font-medium">{payload[0].name}</p>
            <p className="text-gray-500 dark:text-gray-400">
                Amount: <span className="text-gray-800 dark:text-white font-semibold inline-flex items-center gap-1">
                <LuIndianRupee className="text-xs" />
                {payload[0].value}
                </span>
            </p>
            </div>
        );
    }
    return null;

}

export default CustomTooltip