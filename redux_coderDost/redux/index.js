//! NON-SYNCHRONOUS OPERATIONS ...... please go through index2.js before reading it
import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// middleware for redux
import { thunk } from 'redux-thunk';

//* defining reducer no.1
const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case 'INIT':
      return { amount: action.payload };
    case 'INCREMENT':
      return { amount: state.amount + 1 };

    case 'DECREMENT':
      return { amount: state.amount - 1 };

    case 'INCREMENT_BY_AMOUNT':
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
};

//* defining reducer no.2
const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_AMOUNT':
      // if the adding_amount >= 100, then add 1 bonus point
      if (action.payload >= 100)
        return { points: state.points + action.payload };
    default:
      return state;
  }
};

//* creating store and passing reducers and middlewares which we are using
const store = createStore(
  //* combining all the reducers
  combineReducers({
    reducerName_account: accountReducer,
    reducerName_bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

//! ACTIONS CREATORs

function increment() {
  return { type: 'INCREMENT' };
}

function decrement() {
  return { type: 'DECREMENT' };
}

function incrementByAmount(value) {
  return { type: 'INCREMENT_BY_AMOUNT', payload: value };
}

// setInterval(() => {
//   store.dispatch(increment());
// }, 5000);

// setTimeout(() => {
//   store.dispatch(decrement());
// }, 10000);

// setTimeout(() => {
//   store.dispatch(incrementByAmount(10));
// }, 10000);

//! problem: action creators's fun are used to trigger the dispatch function immediately, they work in synchronous manner since we are making the action creator's fun as async which is returning a promise hence it will throw you an error. Whenever we dispatch something in redux, it will immediately dispatch and trigger the reducer function. there is solution in redux for that we can stop the dispatch function for sometime until promise get resolve or rejected and then we can run the dispatch function. So to do this we  may need to add middleware to run the dispatching function after some time  such as 'redux-thunk' middleware to handle dispatching functions. Here redux middleware (redux-thunk) will give you 2 parameter that is dispatch(//to call it whenever you want to run it) and other is getState: to access global state.
function getUser(id) {
  // we are returning another function which will take 2 arguments because we want to pass the "id" which is not possible with 3 arguments(dispatch, getState, id) hence we to do it we are performing async operation in return function
  return async (dispatch, getState) => {
    console.log('state is: ', getState);
    let { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: 'INIT', payload: value };
}

setTimeout(() => {
  //! running the dispatch function.... we don't want to run the function during dispatch. hence we are passing a function inside dispatch which will be handle by redux-thunk middleware
  // store.dispatch(getUser(2));
  store.dispatch(incrementByAmount(20000));
}, 5000);


