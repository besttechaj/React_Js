import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';
const App = () => {
  let amount = useSelector((state) => state.reducerName_account.amount);
  let points = useSelector((state) => state.reducerName_bonus.points);
  return (
    <div className='App'>
      <h4>App</h4>
      <h3>Current Amount: {amount}</h3>
      <h3>Total Bonus:{points} </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
};

export default App;

//! useSelector hook:
// present inside react-redux library
// helps to access state in redux
