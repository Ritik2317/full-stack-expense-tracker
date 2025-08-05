import React from 'react';
import { Button } from '../ui/button';
import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '@/customs/cards/TransactionInfoCard';
import moment from 'moment';

function ExpenseTransactions({ transactions, onSeeMore }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md my-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Expenses</h5>
        <Button
          onClick={onSeeMore}
          className="text-blue-600 hover:underline flex items-center gap-1 hover:cursor-pointer"
        >
          See All <LuArrowRight className="text-base" />
        </Button>
      </div>
      <div>
        {Array.isArray(transactions) && transactions.length > 0 ? (
          transactions.slice(0, 5).map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category?.name || expense.category || 'Unknown'}
              icon={expense.icon}
              date={moment(expense.date).format("Do MMM YYYY")}
              amount={expense.amount}
              type="expense"
              hideDeleteBin
            />
          ))
        ) : (
          <p className="text-sm text-red-500"></p>
        )}
      </div>
    </div>
  );
}

export default ExpenseTransactions;
