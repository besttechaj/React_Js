import { incrementBonus } from '../actions/index';
const Bonus = () => {
  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Bonus Components</b>
        </h4>
        <h3>Total points: {store.getState().reducerName_bonus.points}</h3>
        <button onClick={() => store.dispatch(incrementBonus())}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
