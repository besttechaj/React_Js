import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
const AddTodos = () => {
  const [input, setInput] = React.useState('');

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));

    setInput('');
  };

  return (
    <>
      <h1>Add A TODO NOTE</h1>
      <div>
        <form onSubmit={addTodoHandler}>
          <input
            type='text'
            placeholder='Enter a todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddTodos;
