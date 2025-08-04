import React from 'react';
import { LuIndianRupee } from 'react-icons/lu';
import CustomPieChart from '../charts/CustomPieChart';

const COLORS = ['#60a5fa', '#f87171', '#34d399']; 

function FinancialOverview({ totalBalance, totalIncome, totalExpense }) {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md mt-8">
      <div className="mb-4 flex justify-between items-center">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
          Financial Overview
        </h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={
          <>
            <LuIndianRupee className="inline text-xl" />
            {totalBalance}
          </>
        }
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
}

export default FinancialOverview;
