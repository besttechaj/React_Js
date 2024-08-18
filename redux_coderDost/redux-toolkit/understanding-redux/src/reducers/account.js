//* defining reducer no.1
export const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case 'GET_USER_ACCOUNT_FULFILLED':
      return { amount: action.payload, pending: false }; // false: don't show loader

    case 'GET_USER_ACCOUNT_REJECTED':
      return { ...state, error: action.error, pending: false }; // false: don't show loader

    case 'GET_USER_ACCOUNT_PENDING':
      return { ...state, pending: true }; // true: show the loader

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
