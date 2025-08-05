import { prepareExpenseBarChartData } from '@/utils/helper';
import React, { useEffect, useState } from 'react'
import CustomBarChart from '../charts/CustomBarChart';

function Last30DaysExpenses({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
    return () => {};
  }, [data]);

  return (
    <div className="mt-6">
      <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Last 30 Days Expenses
      </h5>
      <CustomBarChart data={chartData} />
    </div>
  );
}


export default Last30DaysExpenses