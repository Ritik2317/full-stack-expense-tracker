import DashboardLayout from '@/components/layouts/DashboardLayout'
import { useUserAuth } from '@/hooks/useUserAuth'
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { IoMdCard } from "react-icons/io";
import InfoCard from '@/customs/cards/InfoCard';
import { addThousandSeparator } from '@/utils/helper';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import RecentTransactions from '@/components/Dashboard/RecentTransactions';
import FinancialOverview from '@/components/Dashboard/FinancialOverview';
import ExpenseTransactions from '@/components/Dashboard/ExpenseTransactions';
import Last30DaysExpenses from '@/components/Dashboard/Last30DaysExpenses';

function Home() {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData,setDashboardData] = useState(null);
  const [loading,setLoading] = useState(false);

  const fetchDashboardData = async ()=>{
    if(loading)return;
    setLoading(true);
    try{
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if(response.data){
        setDashboardData(response.data);
      }
    }catch(error){
      console.log("Something went wrong. Please try again.", error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  
    return () => {
      
    }
  }, [])
  

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <InfoCard 
          icon={<IoMdCard className="text-3xl text-blue-500" />}
          label="Total Balance"
          value={addThousandSeparator(dashboardData?.totalBalance)}
        />
        <InfoCard
          icon={<LuHandCoins className="text-3xl text-green-500" />}
          label="Total Income"
          value={addThousandSeparator(dashboardData?.totalIncome)}
        />
        <InfoCard 
          icon={<LuWalletMinimal className="text-3xl text-red-500" />}
          label="Total Expense"
          value={addThousandSeparator(dashboardData?.totalExpense)}
        />
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <RecentTransactions
          transactions={dashboardData?.recentTransactions}
          onSeeMore={() => navigate("/expense")}
        />
        <FinancialOverview className="max-w-3xl mx-auto mt-8"
          totalBalance = {dashboardData?.totalBalance || 0}
          totalIncome = {dashboardData?.totalIncome || 0}
          totalExpense = {dashboardData?.totalExpense || 0} 
        />
        <ExpenseTransactions className="max-w-3xl mx-auto mt-8"
          transactions={dashboardData?.last30DaysExpenses?.transactions || {}}
          onSeeMore={()=>navigate("/expense")}
        />
        <Last30DaysExpenses
          data={dashboardData?.last30DaysExpenses?.transactions || {}}
        />
      </div>
    </DashboardLayout>
  )
}

export default Home