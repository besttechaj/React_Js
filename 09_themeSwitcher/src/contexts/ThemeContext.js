//? Different Way to use contextApi: Doing all the steps involved inside contextApi in single file

import { useContext } from 'react';
import { createContext } from 'react';

//! step1: creating theme context using default values
export const ThemeContext = createContext({
  themeMode: 'light',
  lightTheme: () => {},
  darkTheme: () => {},
});

//! step2: providing the context from here only
export const ThemeProvider = ThemeContext.Provider;

//! step3: To consume the data from the context, we are defining one custom theme function using "useContext() Hook"

export default function useTheme() {
  return useContext(ThemeContext);
}
