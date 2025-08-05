import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useUserAuth } from '@/hooks/useUserAuth';
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoMdCard } from 'react-icons/io';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';

import InfoCard from '@/customs/cards/InfoCard';
import RecentTransactions from '@/components/Dashboard/RecentTransactions';
import FinancialOverview from '@/components/Dashboard/FinancialOverview';
import ExpenseTransactions from '@/components/Dashboard/ExpenseTransactions';
import Last30DaysExpenses from '@/components/Dashboard/Last30DaysExpenses';
import RecentIncomeWithChart from '@/components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '@/components/Dashboard/RecentIncome';
import { addThousandSeparator } from '@/utils/helper';

function Home() {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response.data) setDashboardData(response.data);
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <InfoCard
          icon={<IoMdCard className="text-4xl text-blue-600" />}
          label="Total Balance"
          value={addThousandSeparator(dashboardData?.totalBalance)}
        />
        <InfoCard
          icon={<LuHandCoins className="text-4xl text-green-600" />}
          label="Total Income"
          value={addThousandSeparator(dashboardData?.totalIncome)}
        />
        <InfoCard
          icon={<LuWalletMinimal className="text-4xl text-red-600" />}
          label="Total Expense"
          value={addThousandSeparator(dashboardData?.totalExpense)}
        />
      </section>

      <div className="space-y-10 max-w-5xl mx-auto">
        <RecentTransactions
          transactions={dashboardData?.recentTransactions}
          onSeeMore={() => navigate("/expense")}
        />

        <FinancialOverview
          totalBalance={dashboardData?.totalBalance || 0}
          totalIncome={dashboardData?.totalIncome || 0}
          totalExpense={dashboardData?.totalExpense || 0}
        />

        <ExpenseTransactions
          transactions={dashboardData?.last30DaysExpenses?.transactions || {}}
          onSeeMore={() => navigate("/expense")}
        />

        <Last30DaysExpenses
          data={dashboardData?.last30DaysExpenses?.transactions || {}}
        />

        <RecentIncomeWithChart
          data={dashboardData?.last60DaysIncome?.transactions?.slice(0, 3) || []}
          totalIncome={dashboardData?.totalIncome || 0}
        />

        <RecentIncome
          transactions={dashboardData?.last60DaysIncome?.transactions || {}}
          onSeeMore={() => navigate("/income")}
        />
      </div>
    </DashboardLayout>
  );
}

export default Home;
