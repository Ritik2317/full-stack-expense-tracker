import AddExpenseForm from '@/components/Expense/AddExpenseForm';
import ExpenseList from '@/components/Expense/ExpenseList';
import ExpenseOverview from '@/components/Expense/ExpenseOverview';
import AddIncomeForm from '@/components/Income/AddIncomeForm';
import DeleteAlert from '@/components/Income/DeleteAlert';
import IncomeList from '@/components/Income/IncomeList';
import IncomeOverview from '@/components/Income/IncomeOverview';
import DashboardLayout from '@/components/layouts/DashboardLayout'
import Modal from '@/components/layouts/Modal';
import { useUserAuth } from '@/hooks/useUserAuth'
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

function Expense() {
  useUserAuth();
  const [expenseData, setExpenseData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [openDeleteAlert,setOpenDeleteAlert] = useState({
    show:false,
    data:null,
  })
  const [openAddExpenseModal,setOpenAddExpenseModal] = useState(false);
  useEffect(()=>{
    fetchExpenseDetails();
    return ()=>{};
  },[])

  const fetchExpenseDetails = async()=>{
    if(loading)return;
    setLoading(true);

    try{
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
      );
      if(response.data){
        setExpenseData(response.data);
      }
    }catch(error){
      console.log("Something went wrong. Please try later.", error);
    }finally{
      setLoading(false);
    }
  }

  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("Source is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });
      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Error adding expense:", error.response?.data?.message || error.message);
      toast.error("Failed to add expense. Please try again.");
    }
  };


  const deleteExpense = async(id)=>{
    try{
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id))
      setOpenDeleteAlert({show:false,data:null});
      toast.success("Expense detail deleted successfully");
      fetchExpenseDetails();
    }catch(error){
      console.error("Error deleting income: ", error.response?.data?.message || error.message);
    }
  };

  const handleDownloadExpenseDetails = async()=>{

  }
  return (
    <DashboardLayout activeMenu="Expense">
      <div className="px-4 py-6 space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <ExpenseOverview
            transactions={expenseData}
            onAddExpense={() => setOpenAddExpenseModal(true)}
          />
        </div>
        
        <ExpenseList
          transactions={expenseData}
          onDelete={(id)=>{
            setOpenDeleteAlert({show:true,data:id});
          }}
          onDownload={handleDownloadExpenseDetails}
        />
        <Modal
          isOpen={openAddExpenseModal}
          onClose={() => setOpenAddExpenseModal(false)}
          title="Add Expense"
        >
          <div className="space-y-4">
            <AddExpenseForm onAddExpense = {handleAddExpense}/>
          </div>
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={()=> setOpenDeleteAlert({show:false,data:null})}
          title="Delete Expense"
        >
          <DeleteAlert
            content="Are you sure you want to delete this expense detail?"
            onDelete={()=>deleteExpense(openDeleteAlert.data)}
          />
        </Modal>
        <div>
          
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Expense