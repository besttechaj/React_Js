// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// middleware for redux
import { thunk } from 'redux-thunk';
import { accountReducer } from './reducers/account.js';
import { bonusReducer } from './reducers/bonus.js';
//* creating store and passing reducers and middlewares which we are using
const store = createStore(
  //* combining all the reducers
  combineReducers({
    reducerName_account: accountReducer,
    reducerName_bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
