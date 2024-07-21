import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // used to check whether the user is authenticated or not
  status: false,
  // storing the user data
  userData: null,
};
// createSlice(): A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. This API is the standard approach for writing Redux logic.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //* state: current_state
    //* action: payload_dataFromUser

    login: (state, action) => {
      state.status = true;
      //todo : doubt@ payload.userData ?
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// exporting functions so that different components can fetch state or dispatch those function
export const { login, logout } = authSlice.actions;
// exporting default reducer
export default authSlice.reducer;
