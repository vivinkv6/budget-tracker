import React, { useState } from 'react'

function IncomeExpense() {
    const[income,setIncome]=useState(1000);
    const[expense,setExpense]=useState(-100);
    return (
        <>
        <div className='col-6 text-center' style={{backgroundColor:'#e2e7ef',display:'inline-block',padding:'30px 20px',borderRight:'3px solid black'}}>
           <h2>Income</h2>
           <h4 style={{color:'green'}}>Rs.{income}</h4>
        </div>
         <div className='col-6 text-center' style={{backgroundColor:'#e2e7ef',display:'inline-block',padding:'30px 20px',borderLeft:'3px solid black'}}>
         <h2>Expense</h2>
         <h4 style={{color:'red'}}>Rs.{expense}</h4>
      </div>
      </>

    )
}

export default IncomeExpense;
