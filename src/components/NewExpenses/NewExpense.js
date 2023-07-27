import React from 'react'
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css'

export const NewExpense = (props) => {
    const saveExpenseDataHandler= (enteredExpenseData) =>{

        //transfert data to app.js
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
