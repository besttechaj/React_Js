import Account from './components/Account';
import Bonus from './components/Bonus';
const App = () => {
  return (
    <div className='App'>
      <h4>App</h4>
      <h3>Current Amount: {store.getState().reducerName_account.amount}</h3>
      <h3>Total Amount:{store.getState().reducerName_bonus.points} </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
};

export default App;
