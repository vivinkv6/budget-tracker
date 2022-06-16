import React from 'react'

function IncomeExpense({incomes,expenses,getBalance}) {

    const sumIncome =incomes.reduce((total,value)=>total+=Number(value),0);
    const sumExpense =expenses.reduce((total,value)=>total+=Number(value),0);

    getBalance(sumIncome,sumExpense)
    
   

    return (
        <>
        <div className='col-6 text-center' style={{backgroundColor:'#e2e7ef',display:'inline-block',padding:'30px 20px',borderRight:'3px solid black'}}>
           <h2>Income</h2>
           <h4 style={{color:'green'}}>Rs.{sumIncome}</h4>
        </div>
         <div className='col-6 text-center' style={{backgroundColor:'#e2e7ef',display:'inline-block',padding:'30px 20px',borderLeft:'3px solid black'}}>
         <h2>Expense</h2>
         <h4 style={{color:'red'}}>Rs.{sumExpense}</h4>
      </div>
      </>

    )
}

export default IncomeExpense;
