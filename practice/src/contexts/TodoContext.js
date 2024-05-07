import { useContext } from 'react';
import { createContext } from 'react';

//* step1: creating global context/ global variable
export let TodoContext = createContext();

//* step2: creating provider to wrap the complete Application
export let TodoContextProvider = TodoContext.Provider;

//* step3: creating one custom hook to fetch the data from context using useContext Hook

export const useTodo = () => {
  return useContext();
};
  