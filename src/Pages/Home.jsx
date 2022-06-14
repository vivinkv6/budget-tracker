import React from 'react'
import Balance from '../Components/Balance';
import IncomeExpense from '../Components/IncomeExpense';

function Home() {
  return (
    <div className='container'>
      <h1 align="center">Expense Tracker</h1>
      <div className='row'>
        <div className="col-sm-6 text-center">
          <Balance/>
        </div>
        <div className="col-sm-12 text-center">
          <IncomeExpense/>
        </div>

      </div>
    </div>
  )
}

export default Home
