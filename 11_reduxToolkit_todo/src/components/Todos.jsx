import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
const Todos = () => {
  // fetching the data from the store
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1>list all todo</h1>
      <br />
      {todos.map((v, i) => {})}
    </div>
  );
};

export default Todos;
