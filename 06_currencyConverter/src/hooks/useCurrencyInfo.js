//! Designing one custom hook

import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [api_data, setApiData] = useState({});

  //! we want to hit the below api whenever there is change in dependency hence we are using useEffect hook
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((res) => {
      // convert data to normal javascript format
      res.json().then((data) => {
        console.log(data);
        console.log(data[currency]);
      });
    });
  }, [currency]);

  console.log(api_data);
  return api_data;
}

export default useCurrencyInfo;
