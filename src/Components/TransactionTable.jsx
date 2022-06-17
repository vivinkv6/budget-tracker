import React from 'react'
import Table from 'react-bootstrap/Table';
function TransactionTable({ transaction }) {
  console.log(transaction);
  
  return (


    <Table striped bordered hover="sm" style={{ marginTop: '40px' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Items</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((value,index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{value.item}</td>
              <td>{value.amount}</td>
            </tr>
          )
        })}

      </tbody>
    </Table>


  )
}

export default TransactionTable;
