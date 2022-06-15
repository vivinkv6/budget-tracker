import React from 'react'
import Balance from '../Components/Balance';
import IncomeExpense from '../Components/IncomeExpense';
import Transactions from '../Components/Transactions';

function Home() {
  return (
    <div className='container'>
      <h1 align="center">Expense Tracker</h1>
      <div className='row'>
        <div className="col-sm-6 text-center">
          <Balance/>
        </div>
        <div className="col-sm-6 mt-5">
          <IncomeExpense/>
        </div>
        <div className='col-sm-12 mt-5'>
          <Transactions/>
        </div>

      </div>
    </div>
  )
}

export default Home
