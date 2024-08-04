//! NON-SYNCHRONOUS OPERATIONS ...... please go through index2.js before reading it
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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

//* creating store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

//* Async api call

async function getUser() {
  let res = await axios.get(`http://localhost:3000/account`);
  console.log(res.data);
}
getUser();

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

function init(value) {
  return { type: 'INIT', payload: value };
}

setTimeout(() => {
  store.dispatch(init(500));
}, 5000);
