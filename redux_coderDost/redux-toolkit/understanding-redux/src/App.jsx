import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';
const App = () => {
  let amount = useSelector((state) => console.log(state));
  console.log(amount);
  return (
    <div className='App'>
      <h4>App</h4>
      {/* <h3>Current Amount: {store.getState().reducerName_account.amount}</h3>
      <h3>Total Amount:{store.getState().reducerName_bonus.points} </h3> */}

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
};

export default App;

//! useSelector hook:
// present inside react-redux library
// helps to access state in redux
