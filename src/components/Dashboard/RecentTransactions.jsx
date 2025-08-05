import React from 'react'
import { Button } from '../ui/button'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment';
import TransactionInfoCard from '@/customs/cards/TransactionInfoCard';

function RecentTransactions({transactions, onSeeMore}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h5>
            <Button onClick={onSeeMore} className="text-blue-600 hover:underline flex items-center gap-1 hover:cursor-pointer">
            See All <LuArrowRight className="text-base" />
            </Button>
        </div>

        <div>
            {transactions?.slice(0, 5)?.map((item) => (
            <TransactionInfoCard
                key={item._id}
                title={item.type === "expense" ? item.category : item.sources}
                icon={item.icon}
                date={moment(item.date).format("DD MMM YYYY")}
                amount={item.amount}
                type={item.type}
                hideDeleteBin
            />
            ))}
        </div>
    </div>
  )
}

export default RecentTransactions