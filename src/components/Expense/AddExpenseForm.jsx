import React, { useState } from 'react'
import Input from '../layouts/Input';
import { Button } from '../ui/button';
import EmojiPickerPopup from '../layouts/EmojiPicker';

function AddExpenseForm({onAddExpense}) {
    const [expense,setExpense] = useState({
        category:"",
        amount:"",
        date:"",
        icon:"",
    });
    const handleChange = (key,value)=>setExpense({...expense,[key]:value});
  return (
    <div>
        <EmojiPickerPopup
            icon={expense.icon}
            onSelect={(selectedIcon)=> handleChange("icon",selectedIcon)}
        />
        <Input
            value={expense.category}
            onChange={({target})=>handleChange("category",target.value)}
            label="Expense Source"
            placeholder="Shopping, Dining etc."
            type="text"
        />
        <Input 
            value={expense.amount}
            onChange={({target})=>handleChange("amount",target.value)}
            label="Amount"
            placeholder=""
            type="number"
        />
        <Input
            value={expense.date}
            onChange={({target})=>handleChange("date",target.value)}
            label="Date"
            placeholder=""
            type="date"
        />

        <div className='flex justify-center items-center'>
            <Button
                onClick={() => onAddExpense(expense)}
                className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md hover:cursor-pointer"
            >
                Add expense
            </Button>
        </div>
    </div>
  )
}

export default AddExpenseForm