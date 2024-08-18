import axios from 'axios';

//! ACTIONS CREATORs: dispatch the action to trigger the reducer

export function increment() {
  return { type: 'INCREMENT' };
}

export function decrement() {
  return { type: 'DECREMENT' };
}

export function incrementByAmount(value) {
  return { type: 'INCREMENT_BY_AMOUNT', payload: value };
}

//! problem: action creators's fun are used to trigger the dispatch function immediately, they work in synchronous manner since we are making the action creator's fun as async which is returning a promise hence it will throw you an error. Whenever we dispatch something in redux, it will immediately dispatch and trigger the reducer function. there is solution in redux for that we can stop the dispatch function for sometime until promise get resolve or rejected and then we can run the dispatch function. So to do this we  may need to add middleware to run the dispatching function after some time  such as 'redux-thunk' middleware to handle dispatching functions. Here redux middleware (redux-thunk) will give you 2 parameter that is dispatch(//to call it whenever you want to run it) and other is getState: to access global state.
export function getUserAccount(id) {
  // we are returning another function which will take 2 arguments because we want to pass the "id" which is not possible with 3 arguments(dispatch, getState, id) hence we to do it we are performing async operation in return function
  return async (dispatch, getState) => {
    try {
      // to show loader on the top until promise didn't get fulfilled/ reject state
      dispatch(getUserAccount_pending());
      console.log('state is: ', getState);
      // promise has 3 states: we need to handle all state USING DISPATCH...else if suppose if we get pending, rejected then our app will crash
      let { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(getUserAccount_fulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccount_rejected(error.message));
    }
  };
}

export function getUserAccount_fulfilled(value) {
  return { type: 'GET_USER_ACCOUNT_FULFILLED', payload: value };
}

// catching the error in promise and handling it using dispatching
export function getUserAccount_rejected(value) {
  return { type: 'GET_USER_ACCOUNT_REJECTED', error: value };
}

// we can add a waiting logo/ loader in promise and handling it using dispatching. It will show waiting logo until promise didn't get fulfilled or reject state
export function getUserAccount_pending() {
  return { type: 'GET_USER_ACCOUNT_PENDING' };
}

export function incrementBonus() {
  return { type: 'INCREMENT_BY_BONUS' };
}
