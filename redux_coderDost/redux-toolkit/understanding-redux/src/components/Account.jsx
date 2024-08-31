import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from '../actions';

const Account = () => {
  const [value, setValue] = useState(0);

  // useSelector: to access global state in redux
  let amount = useSelector((state) => state.reducerName_account.amount);
  let points = useSelector((state) => state.reducerName_bonus.points);
  // to dispatch function in redux
  const dispatch = useDispatch();

  return (
    <div className='card' style={{ border: '2px solid red' }}>
      <div className='container'>
        <h4>
          <b>Account components</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <h3>points:${points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type='text' onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
{/* passing specific user's id in getUserAccount */}
        <button onClick={() => dispatch(getUserAccount(1))}>
          Initialize account
        </button>
      </div>
    </div>
  );
};
2 45555555555555
export default Account;
