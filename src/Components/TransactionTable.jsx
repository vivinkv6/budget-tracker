import React from 'react'
import Table from 'react-bootstrap/Table';
function TransactionTable({ transaction }) {

  return (
  
    <>
      <Table striped bordered hover="sm" style={{ marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Items</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.item}</td>
                {value.amount > 0 ? <td style={{ color: 'green' }}>{value.amount}</td> : <td style={{ color: 'red' }}>{value.amount}</td>}
              </tr>
            )
          })}

        </tbody>
      </Table>
      
    </>

  )
}

export default TransactionTable;
