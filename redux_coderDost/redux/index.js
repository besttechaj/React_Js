//! NON-SYNCHRONOUS OPERATIONS ...... please go through index2.js before reading it
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// middleware for redux
import { thunk } from 'redux-thunk';

//* defining reducer
const reducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case 'INIT':
      console.log(action.payload);
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

//* creating store and passing reducers and middlewares which we are using
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

const history = [];

//* Async api call

// async function getUser() {
//   // destructuring data
//   let { data } = await axios.get(`http://localhost:3000/account/1`);
//   console.log(data);
// }
// getUser();

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

//! problem: action creators's fun are used to trigger the dispatch function immediately, they work in synchronous manner since we are making the action creator's fun as async which is returning a promise hence it will throw you an error. Whenever we dispatch something in redux, it will immediately dispatch and trigger the reducer function. there is solution in redux for that we can stop the dispatch function for sometime until promise get resolve or rejected and then we can run the dispatch function. So to do this we  may need to add middleware to run the dispatching function after some time  such as 'redux-thunk' middleware to handle dispatching functions. Here redux middleware (redux-thunk) will give you 2 parameter that is dispatch(//to call it whenever you want to run it) and other is getState function
async function init(dispatch, getState) {
  try {
    console.log(getState);
    let { data } = await axios.get(`http://localhost:3000/account/1`);
    dispatch({ type: 'INIT', payload: data.amount });
  } catch (error) {
    console.log('error is: ', error);
  }
}

setTimeout(() => {
  //! running the dispatch function
  store.dispatch(init);
}, 5000);
