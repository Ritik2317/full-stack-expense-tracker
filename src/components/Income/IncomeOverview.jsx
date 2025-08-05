import { prepareIncomeChartData } from '@/utils/helper';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { LuPlus } from 'react-icons/lu';
import CustomBarChart from '../charts/CustomBarChart';

function IncomeOverview({transactions, onAddIncome}) {
    const [chartData,setChartData] = useState();

    useEffect(()=>{
        const result = prepareIncomeChartData(transactions);
        setChartData(result);
        return ()=>{};
    },[transactions])
  return (
   <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-6">
        {/* Heading and Add Income button in one row */}
        <div className="flex items-center justify-between">
            <div>
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Income Overview</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your earnings and income trends
            </p>
            </div>
            <Button
            onClick={onAddIncome}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
            <LuPlus className="w-4 h-4" />
            Add Income
            </Button>
        </div>

        {/* Chart */}
        <div className="mt-4">
            <CustomBarChart
            data={transactions.map((item) => ({
                category: item.sources,
                amount: item.amount,
            }))}
            />
        </div>
    </div>

  )
}

export default IncomeOverview