//! SYNCHRONOUS OPERATIONS
import { createStore, applyMiddleware } from 'redux';
//* installing redux's middleware package: Display your current_reducer function change in state ( works as a logger that is logs the operation details )
import logger from 'redux-logger';
//* defining reducer
const reducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // mutable object : wrong way to update state.. it will change the previous state's value with the new state value
      //! DON'T DO LIKE IT state.amount = state.amount + 1;
      // making object as immutable which means creating another copy of previous state's value hence we are not changing the previous value of the object and creating another state for new value. Below we are creating a new object and taking reference of previous object
      return { amount: state.amount + 1 };

    case 'DECREMENT':
      return { amount: state.amount - 1 };

    case 'INCREMENT_BY_AMOUNT': // increment the amount by passed parameter that is payload
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
};

//* creating store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

//! NOTE: Comment store.subscribe method before testing logger middleware because logger give more information
//* store.subscribe(): this method will run whenever there is a change in state
// store.subscribe(() => {
//   //* store.getState(): to get the global state
//   history.push(store.getState());
//   console.log(history);
// });

//! ACTIONS CREATOR OR DISPATCHING/ TRIGGERING EVENTS BELOW:   //* dispatch is used to trigger/ invoke the reducer function

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

setTimeout(() => {
  store.dispatch(incrementByAmount(10));
}, 10000);

//? What are the middleware in redux ? It is like when you want to perform some operation between dispatch an event and before triggering the event in reducer function like calling an api before events gets triggered or delaying the dispatch. In backend we mostly use the middleware in-between the request like before sending the user to its home portal we have to authenticate him. It is like if a user want to reach its target then he has to pass through some authentication gate.
