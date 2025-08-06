import React from 'react'
import { Button } from '../ui/button'
import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '@/customs/cards/TransactionInfoCard'
import moment from 'moment'

function ExpenseList({ transactions, onDelete, onDownload }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Expense Sources
        </h5>
        <Button
          onClick={onDownload}
          className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition hover:cursor-pointer"
        >
          <LuDownload className="w-5 h-5" />
          Download
        </Button>
      </div>

      {/* Transaction Cards */}
      <div className="space-y-4">
        {transactions && transactions.length > 0 ? (
          transactions.map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={moment(expense.date).format('Do MMM YYYY')}
              amount={expense.amount}
              type="expense"
              onDelete={() => onDelete(expense._id)}
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-center">
            No expense sources available.
          </p>
        )}
      </div>
    </div>
  )
}

export default ExpenseList
