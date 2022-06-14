import React, { useState } from 'react'

function IncomeExpense() {
    const[income,setIncome]=useState(1000000);
    const[expense,setExpense]=useState(-500);
    return (
        <>
        <div style={{backgroundColor:'#e1e3e6',display:'inline-block',padding:'30px 20px'}}>
           <h2>Income</h2>
           <h4 style={{color:'green'}}>Rs.{income}</h4>
        </div>
         <div style={{backgroundColor:'#e1e3e6',display:'inline-block',padding:'30px 20px'}}>
         <h2>Expense</h2>
         <h4 style={{color:'red'}}>Rs.{expense}</h4>
      </div>
      </>

    )
}

export default IncomeExpense;
