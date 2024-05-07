import React, { useState } from 'react';
import './css/TodoForm.css';
import { useNavigate } from 'react-router-dom';
export default function TodoForm() {
  let navigate = useNavigate();
  let [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    setMessage('');

    setTimeout(() => {
      alert('note added successfully!');
    }, 2000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='msg'
          name='msg'
          value={message}
          onChange={handleChange}
        />
        <button type='submit'>Add Note</button>
        <button onClick={() => setMessage('')}>Clear</button>
        <button onClick={() => navigate('/')}>Go back</button>
      </form>
    </div>
  );
}
