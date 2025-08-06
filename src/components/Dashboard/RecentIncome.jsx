import React from 'react';
import { Button } from '../ui/button';
import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '@/customs/cards/TransactionInfoCard';
import moment from 'moment';

function RecentIncome({ transactions, onSeeMore }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md my-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Income</h5>
        <Button
          onClick={onSeeMore}
          className="text-blue-600 hover:underline flex items-center gap-1 hover:cursor-pointer"
        >
          See All <LuArrowRight className="text-base" />
        </Button>
      </div>
      <div>
        {Array.isArray(transactions) && transactions.length > 0 ? (
          transactions.slice(0, 5).map((income) => (
            <TransactionInfoCard
              key={income._id}
              title={income.sources?.name || income.sources || 'Unknown'}
              icon={income.icon}
              date={moment(income.date).format("Do MMM YYYY")}
              amount={income.amount}
              type="income"
              hideDeleteBin
            />
          ))
        ) : (
          <p className="text-sm text-red-500">No income data available.</p>
        )}
      </div>
    </div>
  );
}

export default RecentIncome;
