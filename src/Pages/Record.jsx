import React from 'react'
import TransactionTable from '../Components/TransactionTable'


function Record() {
  return (
    <div className='container'>
      <div className='row'>
    <div className='col-sm-12 text-center'>
      <h1>Transactions</h1>
      <div>
     <TransactionTable/>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Record
