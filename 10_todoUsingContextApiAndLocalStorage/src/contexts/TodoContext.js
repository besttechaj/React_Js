import { createContext, useContext } from 'react';

//* step1:  creating context : default value is empty_object
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'first message',
      completed: false,
    },
    {
      id: 2,
      todo: 'second message',
      completed: false,
    },
    {
      id: 3,
      todo: 'third message',
      completed: false,
    },
  ],
  // to add a new todo
  addTodo: (todo) => {},
  // to update the existing todo
  updateTodo: (id, todo) => {},
  // to delete todo
  deleteTodo: (id) => {},
  // toggle complete
  toggleComplete: (id) => {},
});

//* step2: providing context to the all the components and passing value property inside its opening tag
export const TodoProvider = TodoContext.Provider;

//* step3: creating custom hook for "useContext hook"
export const useTodo = () => {
  return useContext(TodoContext);
};
