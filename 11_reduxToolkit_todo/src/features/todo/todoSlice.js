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
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log('running removeTodo: ', state, action);
      state.todos = state.todos.filter((ele) => ele.id !== action.payload);
    },
  },
});

console.log(todoSlice.actions);
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
