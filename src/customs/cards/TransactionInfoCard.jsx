import { Button } from '@/components/ui/button'
import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { LuTrash, LuTrendingDown, LuTrendingUp, LuUtensils } from 'react-icons/lu'

function TransactionInfoCard({key,title,icon,date,amount,type,hideDeleteBin}) {
  return (
    <div className="flex items-start justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all mb-4">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-full overflow-hidden">
            {icon ? (
                <img src={icon} alt={title} className="w-full h-full object-cover" />
            ) : (
                <LuUtensils className="text-xl text-gray-500 dark:text-gray-300" />
            )}
            </div>
            <div>
            <p className="font-medium text-gray-900 dark:text-white">{title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
        </div>

        <div className="flex items-end flex-col gap-2">
            {!hideDeleteBin && (
            <Button onClick={onDelete} className="text-red-500 hover:text-red-700 p-0">
                <LuTrash />
            </Button>
            )}
            <div className="flex items-center gap-2">
            <h6 className={`font-semibold ${type === "income" ? "text-green-600" : "text-red-500"}`}>
                {type === "income" ? "+" : "-"} <FaRupeeSign className="inline" />{amount}
            </h6>
            {type === "income" ? (
                <LuTrendingUp className="text-green-600" />
            ) : (
                <LuTrendingDown className="text-red-500" />
            )}
            </div>
        </div>
    </div>

  )
}

export default TransactionInfoCard