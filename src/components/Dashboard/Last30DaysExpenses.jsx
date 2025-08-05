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
    <div className="bg-gray-900 p-6 rounded-xl shadow-md text-white my-8">
      <div className="mb-4">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  );
}


export default Last30DaysExpenses