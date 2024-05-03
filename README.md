# React_Js

## what is react js?

- React is a javascript's library

## Difference between library and framework ?

## What is the name of the module to do import and export on frontend(browser) and backend side(node) ?

- frontend (browser): ES-6 Modules
- backend (node): common js modules

## Can we use javascript's es6 modules in node since we use common js module in node?

- Yes, we can use javascript's ES-6 modules to import and export the module in node. To do this we have to give fileName extension .mjs or create on package.json file and mention {"type":"module"}

## What is loader in React js?

- "loader: property" helps you to dynamically fetch the data through the api. Whenever you hit the link your loader will fetch the data from the api and store it inside cached memory and all this process will execute before useEffect() run or A loader in react-router is a function that is used to fetch data for a route before it is rendered

- Two ways to fetch data from the api:

1. using useEffect: it will execute after the components get mounted on the ui
2. using "loader_property" with "useLoaderData() hook": A loader in react-router is a function that is used to fetch data for a route before it is rendered. When you click on a link which directs you to a route, the loader function runs and gets the data ready for the route before it renders.To access the data returned by the loader we use the useLoaderData hook inside the component where the loader function is defined. Using loader is a great way to optimize some functionality while rendering, it will remove the lag when fetch and updating data to the ui using useEffect hook.loader can also be used when response from api is getting later, loader show can be shown until the response. So user knows something is coming.
