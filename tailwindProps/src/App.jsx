// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

function App() {
  // const [count, setCount] = useState(0);

  let name = `neha`;

  let list = {
    place: 'kalyan',
    pincode: 20098,
  };

  return (
    <>
      <h2 className='text-black bg-green-400 p-4 rounded-xl mb-3'>
        Learning react with tailwind
      </h2>
      <Card
        username='Ajay'
        address={{ place: 'talao pali', pincode: 30006 }}
        btnText='read me'
      />
      <Card username={name} address={{ ...list }} />
      <Card />
    </>
  );
}

export default App;
