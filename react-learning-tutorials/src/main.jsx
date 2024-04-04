// import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const MyApp = () => {
  return (
    <div>
      <h1>Creating custom component inside vite bundler</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // JSX syntax:
  //! Below syntax is coming from bundler
  <MyApp />
);
