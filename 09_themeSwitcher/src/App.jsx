import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };
  const darkTheme = () => {
    setThemeMode('dark');
  };

  //! useEffect: to run the render the application once after mounting the component and re-render the component only when particular state is change
  useEffect(() => {
    console.log('rendering App.js component');
    // creating the logic to change the background using normal javascript's
    console.log(document.querySelector('html').classList);
    // If there is any className exist with "light" or "dark", remove it
    document.querySelector('html').classList.remove('light', 'dark');
    // Add a new className
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  return (
    <div>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <ThemeButton />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
