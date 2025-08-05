import React, { useState } from 'react'
import Input from '../layouts/Input';
import { Button } from '../ui/button';
import EmojiPickerPopup from '../layouts/EmojiPicker';

function AddIncomeForm({onAddIncome}) {
    const [income,setIncome] = useState({
        sources:"",
        amount:"",
        date:"",
        icon:"",
    });
    const handleChange = (key,value)=>setIncome({...income,[key]:value});
  return (
    <div>
        <EmojiPickerPopup
            icon={income.icon}
            onSelect={(selectedIcon)=> handleChange("icon",selectedIcon)}
        />
        <Input
            value={income.sources}
            onChange={({target})=>handleChange("sources",target.value)}
            label="Income Source"
            placeholder="Salary, Freelance etc."
            type="text"
        />
        <Input 
            value={income.amount}
            onChange={({target})=>handleChange("amount",target.value)}
            label="Amount"
            placeholder=""
            type="number"
        />
        <Input
            value={income.date}
            onChange={({target})=>handleChange("date",target.value)}
            label="Date"
            placeholder=""
            type="date"
        />

        <div className='flex justify-center items-center'>
            <Button
                onClick={() => onAddIncome(income)}
                className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md hover:cursor-pointer"
            >
                Add Income
            </Button>
        </div>
    </div>
  )
}

export default AddIncomeForm