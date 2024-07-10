import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import './css/Todos.css';
const Todos = () => {
  // fetching the data from the store
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <div className='outer'>
      <h1>list all todo</h1>
      <br />
      {todos.map((v, i) => (
        <React.Fragment key={i}>
          <div className='inner'>
            <li key={v.id}>
              {v.text}
              <button onClick={() => dispatch(removeTodo(v.id))}>delete</button>
            </li>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Todos;
