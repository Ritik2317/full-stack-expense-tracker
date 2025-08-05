import React, { useEffect, useState } from 'react';
import CustomPieChart from '../charts/CustomPieChart';
import { LuIndianRupee } from 'react-icons/lu';

const COLORS = ['#34d399', '#60a5fa', '#f472b6']; // teal, blue, pink

function RecentIncomeWithChart({ data, totalIncome }) {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    if (!Array.isArray(data)) {
      console.error("Expected 'data' to be an array but got:", data);
      setChartData([]);
      return;
    }

    const dataArr = data.map((item) => ({
      name: item?.sources?.name || item?.sources || 'Unknown',
      amount: item?.amount || 0,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md text-white my-8">
      <div className="mb-4">
        <h5 className="text-lg font-semibold">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={totalIncome}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
}

export default RecentIncomeWithChart;
