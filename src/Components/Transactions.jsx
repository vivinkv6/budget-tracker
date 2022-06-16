import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Transactions({getIncomeExpense}) {
    const[amount,setAmount]=useState("");
    const[items,setItems]=useState("");
    const[alert,setAlert]=useState(false);

    const onsubmit=(e)=>{
        e.preventDefault();
       if(isNaN(amount)|| !isNaN(items)){
       setAlert(true);
       }
       else{
        setAlert(false);
        let date=new Date();
        date.getDate();
        getIncomeExpense(amount,date);
        setAmount('');
        setItems('');
       }
    }
  return (
    <div>
     <h1>Add Transactions</h1>
     <hr />
     <form onSubmit={onsubmit}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h4>Items</h4></Form.Label>
        <Form.Control type="text" placeholder="Enter Item" value={items} onChange={(e)=>setItems(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h4>Amount</h4><p>(+ve ->income, -ve ->expense)</p></Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
        {alert && <p style={{color:'red'}}>Please Enter valid</p>}
      </Form.Group>
      <Button type="submit">Add Transactions</Button>
     </form>
    </div>
  )
}

export default Transactions
