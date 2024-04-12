/* eslint-disable react/prop-types */
import { useId } from 'react';

const InputBox = (
  //! performing destructuring
  {
    label,
    amount,
    onAmountChange,
    // to change the currency [dynamic field]
    onCurrencyChange,
    // by default it is empty if no select option is present [ static field]
    currencyOptions = [],
    // default currency state
    selectCurrency = 'USD',
    amountDisable = false,
    currencyDisable = false,
  }
) => {
  // always generate the unique id for each component/value
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className='w-1/2'>
        <label
          // For every label, it will generate the unique id
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {/* from or to */}
          {label}
        </label>
        <input
          // For every input, it will generate the unique id but same as above label code because both the linked.
          id={amountInputId}
          className='outline-none w-full bg-transparent py-1.5'
          //* only accept Number datatype
          type='number'
          placeholder='Enter Amount'
          value={amount}
          onChange={(e) => {
            //* if onAmountChange exist then use callback function else do nothing. In this way you save your application from getting crashed and hence you don't have to debug your code.
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          disabled={amountDisable}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black'
          value={selectCurrency}
          onChange={(e) =>
            //* if onAmountChange exist then use callback function else do nothing. In this way you save your application from getting crashed and hence you don't have to debug your code.
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

/*
import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
*/
