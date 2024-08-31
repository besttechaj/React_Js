import { incrementBonus } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

const Bonus = () => {
  // useSelector: to access global state in redux
  let amount = useSelector((state) => state.reducerName_account.amount);
  let points = useSelector((state) => state.reducerName_bonus.points);
  // to dispatch function in redux
  const dispatch = useDispatch();
  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Bonus Components</b>
        </h4>
        <h3>Total amount: {amount}</h3>
        <h3>Total points: {points}</h3>
        <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;

//! useDispatch(): used to set the dispatch function in redux
