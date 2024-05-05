import React, { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './components';
import './App.css';
export default function App() {
  console.log('rendering app component');
  const [todos, setTodos] = useState([]);
  console.log(todos);
  //* adding a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...todo,
      },
    ]);
  };

  //* deleting an existing todo
  const deleteTodo = (target_id) => {
    setTodos((prev) => prev.filter((ele) => ele.id != target_id));
  };

  //* updating an existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((ele) => (ele.id === id ? todo : ele)));
  };

  //* check or unchecking an existing todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((ele) =>
        ele.id === id ? { ...ele, completed: !ele.completed } : ele
      )
    );
  };

  //! Note : we can write multiple useEffect inside a single application

  //* declaring use Effect to fetch all the values from local storage: Advantage of using this useEffect is whenever we start or mount or re-load our application, it will run only once and will not execute independent of the state change or component's re-rendering.
  useEffect(() => {
    console.log('running useEffect-1');
    // converting it to normal javascript object
    const todos = JSON.parse(localStorage.getItem('todos'));

    //! data stored inside the local storage can be in the form of json or array format
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //* declaring use Effect to set  the values inside local storage: Advantage of using this useEffect is whenever there is any update in "todos" state, it will update the local storage same time that's why we are passing one dependency state ie. "todos" state
  useEffect(() => {
    console.log('running useEffect-2');
    // converting to string before sending
    console.log('inside useEffect-2: ', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1>Welcome to your Sticky Notes</h1>
      <br />
      <TodoForm />
      {todos.map((ele) => {
        return <TodoItem todo={ele} key={ele.id} />;
      })}
    </TodoProvider>
  );
}
