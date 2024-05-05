import React, { useState } from 'react';
import './TodoItem.css';
import { useTodo } from '../contexts';
export default function TodoItem({ todo }) {
  console.log(todo);
  //* step3: fetching the data from the context
  let { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const [isEditable, setIsEditable] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todo.todo);

  //* editing the todo note
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  //* editing the toggle
  const toggleFunction = () => {1 066
    toggleComplete(todo.id);
  };

  return (
    <>
      <div className='container2'>
        <input
          type='checkbox'
          className='inputOne'
          checked={todo.completed}
          onChange={toggleFunction}
        />
        <input
          type='text'
          className='inputTwo'
          value={todoMsg}
          // if the field is editable then do this
          onChange={(e) => setTodoMsg(e.target.value)}
          // depending on the readOnly, we can make this input field to readOnly or editable
          readOnly={!isEditable}
        />
        {/* Edit, Save Button */}
        <button
          className='buttonOne'
          onClick={() => {
            if (todo.completed) return;

            if (isEditable) {
              editTodo();
            } else setIsEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isEditable ? '📁' : '✏️'}
        </button>
        {/* Delete Todo Button */}
        <button className='buttonTwo' onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </div>
    </>
  );
}
