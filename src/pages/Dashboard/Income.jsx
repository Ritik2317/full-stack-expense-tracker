import AddIncomeForm from '@/components/Income/AddIncomeForm';
import DeleteAlert from '@/components/Income/DeleteAlert';
import IncomeList from '@/components/Income/IncomeList';
import IncomeOverview from '@/components/Income/IncomeOverview';
import DashboardLayout from '@/components/layouts/DashboardLayout'
import Modal from '@/components/layouts/Modal';
import { useUserAuth } from '@/hooks/useUserAuth';
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import { toast } from "sonner"

function Income() {
  useUserAuth();
  const [incomeData, setIncomeData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [openDeleteAlert,setOpenDeleteAlert] = useState({
    show:false,
    data:null,
  })
  const [openAddIncomeModal,setOpenAddIncomeModal] = useState(false);
  useEffect(()=>{
    fetchIncomeDetails();
    return ()=>{};
  },[])

  const fetchIncomeDetails = async()=>{
    if(loading)return;
    setLoading(true);

    try{
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );
      if(response.data){
        setIncomeData(response.data);
      }
    }catch(error){
      console.log("Something went wrong. Please try later.", error);
    }finally{
      setLoading(false);
    }
  }

  const handleAddIncome = async (income) => {
    const { sources, amount, date, icon } = income;

    if (!sources.trim()) {
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
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        sources,
        amount,
        date,
        icon,
      });
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully");
      fetchIncomeDetails();
    } catch (error) {
      console.error("Error adding income:", error.response?.data?.message || error.message);
      toast.error("Failed to add income. Please try again.");
    }
  };


  const deleteIncome = async(id)=>{
    try{
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id))
      setOpenDeleteAlert({show:false,data:null});
      toast.success("Income details deleted successfully");
      fetchIncomeDetails();
    }catch(error){
      console.error("Error deleting income: ", error.response?.data?.message || error.message);
    }
  };

  const handleDownloadIncomeDetails = async()=>{

  }
  return (
    <DashboardLayout activeMenu="Income">
      <div className="px-4 py-6 space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>
        
        <IncomeList
          transactions={incomeData}
          onDelete={(id)=>{
            setOpenDeleteAlert({show:true,data:id});
          }}
          onDownload={handleDownloadIncomeDetails}
        />
        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <div className="space-y-4">
            <AddIncomeForm onAddIncome = {handleAddIncome}/>
          </div>
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={()=> setOpenDeleteAlert({show:false,data:null})}
          title="Delete Income"
        >
          <DeleteAlert 
            content="Are you sure you want to delete this income detail?"
            onDelete={()=>deleteIncome(openDeleteAlert.data)}
          />
        </Modal>
        <div>
          
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Income