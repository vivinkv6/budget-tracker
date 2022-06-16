import React, { useState } from 'react'
import Balance from '../Components/Balance';
import IncomeExpense from '../Components/IncomeExpense';
import Transactions from '../Components/Transactions';

function Home() {

//declaration part


const[incomes,setIncomes]=useState([0]);
const[expenses,setExpenses]=useState([0]);
const[balance,setBalance]=useState(0);

//function part



//check if amount is income or not and then insert their respective arrays such as incomes,expenses
const getIncomeExpense=(amt,time)=>{
if(amt >= 0){

  //insert all single income in an array using spread operator
  setIncomes([...incomes,amt]);

}
else{

   //Insert all single expense in an array using spread operator
  setExpenses([...expenses,amt]);
}
 
}

//This function is used for getting balance amount

const getBalance=(i,e)=>{
  let bal = i+e;
  setBalance(bal);
  }



  return (
    <div className='container'>
      <h1 align="center">Expense Tracker</h1>
      <div className='row'>
        <div className="col-sm-6 text-center">
          <Balance balance={balance}/>
        </div>
        <div className="col-sm-6 mt-5">
          <IncomeExpense incomes={incomes} expenses={expenses} getBalance={getBalance}/>
        </div>
        <div className='col-sm-12 mt-5'>
          <Transactions getIncomeExpense={getIncomeExpense}/>
        </div>

      </div>
    </div>
  )
}

export default Home
