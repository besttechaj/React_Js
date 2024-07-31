import { createStore, applyMiddleware } from 'redux';

//* defining reducer
const reducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // mutable object : wrong way to update state.. it will change the previous state's value with the new state value
      //! DON'T DO LIKE IT state.amount = state.amount + 1;
      // making object as immutable which means creating another copy of previous state's value hence we are not changing the previous value of the object and creating another state for new value. Below we are creating a new object and taking reference of previous object
      return { amount: state.amount + 1 };

    default:
      return state;
  }
};

//* creating store
const store = createStore(reducer);

const history = [];

//* store.subscribe(): this method will run whenever there is a change in state
store.subscribe(() => {
  //* store.getState(): to get the global state
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  //* dispatch is used to trigger/ invoke the reducer function
  store.dispatch({ type: 'INCREMENT' });
}, 3000);
