//! Designing one custom hook: basically use .js extension to design the hook

import { useEffect, useState } from 'react';
import result from '../assets/sourceData.json';

function useCurrencyInfo(currency) {
  const [api_data, setApiData] = useState({});

  //! we want to hit the below api whenever there is change in dependency hence we are using useEffect hook otherwise it will run for each component re-rendering.
  useEffect(() => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KFQIa2tnGbdZWhDxk9F4lPO3VTNRDjMJ3lKNd5ZA`
    ).then((res) => {
      // convert data to normal javascript format
      res.json().then((res) => {
        console.log(currency);
        console.log(res.data[currency]);
        setApiData(res.data[currency]);
      });
    });
    //! importing the data from the local storage instead of api
    // console.log(result.data[currency]);
    // setApiData(result.data[currency]);
  }, [currency]);

  //! returning source data list
  console.log(api_data);
  return api_data;
}

export default useCurrencyInfo;
