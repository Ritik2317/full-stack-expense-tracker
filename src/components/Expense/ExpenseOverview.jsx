import { prepareExpenseLineChartData } from '@/utils/helper';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import CustomBarChart from '../charts/CustomBarChart';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../charts/CustomLineChart';

function ExpenseOverview({transactions,onAddExpense}) {
  const [chartData,setChartData] = useState();
    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
            <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md">
                <p className="font-semibold">{payload[0].payload.category}</p>
                <p className="text-sm text-gray-400">
                Amount: ₹ <span className="text-white font-bold">{payload[0].payload.amount}</span>
                </p>
            </div>
            );
        }
        return null;
    };
    useEffect(()=>{
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);
        return ()=>{};
    },[transactions])
  return (
   <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-6">
        {/* Heading and Add Income button in one row */}
        <div className="flex items-center justify-between">
            <div>
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Expense Overview</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your spending habits and financial health at a glance.
            </p>
            </div>
            <Button
            onClick={onAddExpense}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md hover:cursor-pointer"
            >
            <LuPlus className="w-4 h-4" />
            Add Expense
            </Button>
        </div>

        {/* Chart */}
        <div className="mt-4">
            <CustomLineChart
            data={transactions.map((item) => ({
                category: item.category,
                amount: item.amount,
            }))}
            />
        </div>
    </div>

  )
}

export default ExpenseOverview