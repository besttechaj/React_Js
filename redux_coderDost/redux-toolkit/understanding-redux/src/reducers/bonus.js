//* defining reducer no.2
export const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_BONUS':
      return { points: state.points + 1 };
    case 'INCREMENT_BY_AMOUNT':
      // if the adding_amount >= 100, then add 1 bonus point
      if (action.payload >= 100)
        return { points: state.points + action.payload };

    default:
      return state;
  }
};
