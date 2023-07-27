import React,{useState}from 'react'
import { ExpensesList } from './ExpensesList'
import { Card } from '../views/Card'
import { ExpenseFilter } from './ExpenseFilter'
import'./Expenses.css'
import { ExpensesChart } from './ExpensesChart'

export const Expenses = (props) => {
   const [filteredYear, setFilteredYear]= useState(2020);
   
   const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
   };
   
   const filteredExpenses =props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   });


  
   return (
   <div>
    <Card className='expenses'>
         <ExpenseFilter  
         selected = {filteredYear} 
         onChangeFilter ={filterChangeHandler}
         />
         <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
         
    </Card>
   </div>
  )
   }
