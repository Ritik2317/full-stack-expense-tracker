import { Button } from '@/components/ui/button'
import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { LuTrash, LuTrendingDown, LuTrendingUp, LuUtensils } from 'react-icons/lu'

function TransactionInfoCard({ title, icon, date, amount, type, hideDeleteBin, onDelete }) {
  const isReactElement = React.isValidElement(icon);

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all mb-4">
      {/* Left Side: Icon + Title + Date */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-full overflow-hidden text-2xl">
          {icon ? (
            isReactElement ? icon : (
              typeof icon === 'string' && icon.startsWith("http") ? (
                <img src={icon} alt={title} className="w-full h-full object-cover" />
              ) : (
                <span>{icon}</span> // emoji or text fallback
              )
            )
          ) : (
            <LuUtensils className="text-gray-500 dark:text-gray-300" />
          )}
        </div>

        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-white">{title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>

      {/* Right Side: Delete Button + Amount + Icon */}
      <div className="flex flex-col items-end gap-2">
        {!hideDeleteBin && (
          <Button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 p-0 h-auto"
            variant="ghost"
          >
            <LuTrash />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <h6 className={`text-base font-semibold ${type === "income" ? "text-green-600" : "text-red-500"}`}>
            {type === "income" ? "+" : "-"} <FaRupeeSign className="inline" /> {amount}
          </h6>
          {type === "income" ? (
            <LuTrendingUp className="text-green-600" />
          ) : (
            <LuTrendingDown className="text-red-500" />
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionInfoCard;
