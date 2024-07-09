import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
const Todos = () => {
  // fetching the data from the store
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>list all todo</h1>
      <br />
      {todos.map((v, i) => (
        <React.Fragment key={i}>
          <li key={v.id}>
            {v.text}
            <button onClick={() => dispatch(removeTodo(v.id))}>delete</button>
          </li>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Todos;
