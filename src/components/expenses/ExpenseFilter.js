import React from 'react'
import './ExpenseFilter.css'
export const ExpenseFilter = (props) => {
    
    const dropdownChangeHandler= (event) =>{
        props.onChangeFilter(event.target.value);

    };
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by Year</label>
            <select valu={props.select} onChange={dropdownChangeHandler}>
                <option value= '2023'>2023</option>
                <option value= '2022'>2022</option>
                <option value= '2021'>2021</option>
                <option value= '2020'>2020</option>
            </select>
        </div>
    </div>
  )
}
