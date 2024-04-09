import { useState } from 'react';

import './App.css';
import FormId from './components/FormId';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <FormId title='Client' />
      <FormId title='Server' />
    </>
  );
}

export default App;
