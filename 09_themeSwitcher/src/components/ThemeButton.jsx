import React from 'react';
import useTheme from '../contexts/ThemeContext';

export default function ThemeButton() {
  let { themeMode, lightTheme, darkTheme } = useTheme();

  const handleClick = () => {
    themeMode === 'light' ? darkTheme() : lightTheme();
  };

  return (
    <div
      className='container'
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        marginTop: '1rem',
      }}
    >
      <button
        style={{
          border: 'none',
          fontSize: '1rem',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '0.4rem',
          padding: '0.2rem',
          alignText: 'center',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
        onClick={handleClick}
      >
        Switch
      </button>
    </div>
  );
}
