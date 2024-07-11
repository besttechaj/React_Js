import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'hello world' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  // declaring reducers
  reducers: {
    addTodo: (state, action) => {
      console.log('running addTodo: ', state, action);
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      console.log(todo);
      //* In contextAPI our state is not preserved hence first we need to take an array then spread the data in the array and perform some operation but in redux, state are preserved hence directly we are performing the operation on state.
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log('running removeTodo: ', state, action);
      //* In contextAPI our state is not preserved hence first we need to take an array then spread the data in the array and perform some operation but in redux, state are preserved hence directly we are performing the operation on state.
      state.todos = state.todos.filter((ele) => ele.id !== action.payload);
    },
  },
});

// console.log(todoSlice.actions);
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
