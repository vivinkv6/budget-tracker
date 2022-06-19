import React from 'react'

function Balance({balance}) {
    //change color of balance amount
    let colours="";
    if(balance>0){
         colours="green";
    }
    else{
         colours="red";
    }
    return (
        <>
            <h1 style={{ fontWeight: '700',marginTop:'30px'}}>Your Balance</h1>
            <h2 style={{fontWeight: '700',color:colours}}>Rs.{balance}</h2>

        </>
    )
}

export default Balance;
