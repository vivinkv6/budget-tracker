import React from 'react'
import Table from 'react-bootstrap/Table';
function TransactionTable() {
  return (

  
       <Table striped bordered hover="sm" style={{marginTop:'40px'}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Items</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>hai</td>
        </tr>
      </tbody>
    </Table>
   
   
  )
}

export default TransactionTable;
