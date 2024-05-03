// import React, { useState } from 'react';

// import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  console.log(useLoaderData);
  let loaderApiData = useLoaderData();
  console.log(loaderApiData);

  //* Two ways to fetch data from the api:
  // 1. using useEffect: it will execute after the components get mounted on the ui
  // 2. using "loader __ property" with "useLoaderData() hook": A loader in react-router is a function that is used to fetch data for a route before it is rendered. When you click on a link which directs you to a route, the loader function runs and gets the data ready for the route before it renders.To access the data returned by the loader we use the useLoaderData hook inside the component where the loader function is defined. Using loader is a great way to optimize some functionality while rendering, it will remove the lag when fetch and updating data to the ui using useEffect hook.
  // loader can also be used when response from api is getting later, loader show can be shown until the response. So user knows something is coming.
  //* way 1: using useEffect
  // const [data, setData] = useState([]);
  //! we want to display the followers whenever component get mounted
  // useEffect(() => {
  //   fetch('https://dummyjson.com/users').then(
  //     (result) => {
  //       result.json().then(
  //         (apiData) => {
  //           console.log(apiData);
  //           setData(apiData.users);
  //         },
  //         (error) => console.log(error)
  //       );
  //     },
  //     (e) => console.log(e)
  //   );
  // }, []);
  return (
    <div>
      <h1>Github component</h1>
      {/* //!while using useEffect hook  */}
      {/* <h1>Github followers: {data.length}</h1> */}
      {/* //!while using loader  */}
      <h1>
        Github followers:
        <ul>
          {loaderApiData.users.map((v) => {
            let { firstName, id } = v;
            return <li key={id}>{firstName}</li>;
          })}
        </ul>
      </h1>
    </div>
  );
}

export default Github;

//* way 2: using "loader __ property" with "useLoaderData() hook"
export const githubInfoLoader = async () => {
  const response = await fetch('https://dummyjson.com/users');

  return response.json();
};
