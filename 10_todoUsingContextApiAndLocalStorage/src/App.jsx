import React, { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
export default function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  //* adding a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
      },
    ]);
  };

  //* deleting an existing todo
  const deleteTodo = (id) => {
    setTodos((prev) => {
      prev.filter((ele) => ele.id != id);
    });
  };

  //* updating an existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((ele) => {
        ele.id === id ? todo : ele;
      });
    });
  };

  //* check or unchecking an existing todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((ele) => {
        ele.id === id ? { ...ele, completed: !ele.completed } : ele;
      })
    );
  };

  //! Note : we can write multiple useEffect inside a single application

  //* declaring use Effect to fetch all the values from local storage
  useEffect(() => {
    console.log('running useEffect-1');
    const todos = JSON.parse(localStorage.getItem('todos'));
    console.log('fetching local storage: ', todos);

    //! data stored inside the local storage can be in the form of json or array format
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //* declaring use Effect to set  the values inside local storage
  useEffect(() => {
    console.log('running useEffect-2');
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('sending items to local storage: ', todos);
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      App component
    </TodoProvider>
  );
}
