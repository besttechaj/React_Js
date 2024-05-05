import React, { useState } from 'react';
import './TodoForm.css';
import { useTodo } from '../contexts';
export default function TodoForm() {
  const [note, setNote] = useState('');

  const { addTodo } = useTodo();

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note) return;
    addTodo({ todo: note, completed: false });

    setNote('');
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your note...'
          onChange={handleChange}
          id='note'
          name='note'
          value={note}
        />

        <button type='submit'>Add a note</button>
      </form>
    </div>
  );
}
