import React, { useState } from 'react';

const Account = ({ increment, decrement, incrementByAmount, account }) => {
  const [value, setValue] = useState(0);

  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Account components</b>
        </h4>
        <h3>Amount:${account.amount}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type='text' onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={() => incrementByAmount(value)}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
};

export default Account;
