import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css';

function App() {
  // main amount
  const [amount, setAmount] = useState(0);

  // current currency "from"
  const [From, setFrom] = useState('INR');

  // current current currency "to"
  const [to, setTo] = useState('USD');

  // state for converted amount
  const [convertedAmount, setConvertedAmount] = useState(10);

  //? How to use hook?
  console.log(From);
  const currencyInfo = useCurrencyInfo(From);

  //! fetching all the keys from the data source i.e., unit
  const options = Object.keys(currencyInfo);

  //! logic to convert the currency
  const convert = () => {
    console.log(amount);
    console.log(currencyInfo[to]);
    setConvertedAmount(amount * currencyInfo[to]);
  };

  //! logic to swap the currency
  const swap = () => {
    setFrom(to);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='from'
                amount={amount}
                // setAmount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={From}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='to'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                //* amount disabled is true
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert
            </button>
            <button className='w-full bg-blue-600 text-white px-4 py-3 mt-2 rounded-lg'>
              reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

*/
