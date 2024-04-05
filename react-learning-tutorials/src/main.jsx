import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// eslint-disable-next-line react-refresh/only-export-components
// const MyApp = () => {
//   return (
//     <div>
//       <h1>Creating custom component inside vite bundler</h1>
//     </div>
//   );
// };

//! The above function or component will be convert into into the abstract syntax tree that means React will compile your code (return html tag from your App.js file) and create a tree like structure like below object code:
//* Here we  are directly trying to giving output of abstract syntax tree to the react to render it on the UI without the help of transpiler
// const ReactElement = {
//   // name of the element
//   type: 'a',

//   // Passing the element's attribute
//   props: {
//     href: 'google.com',
//     target: '_blank',
//   },

//   // content inside the element
//   children: 'Click me to visit google',
// };

//! Below code will not work because we are not following the react's syntax to create the object
// ReactDOM.createRoot(document.getElementById('root')).render(ReactElement); // we are trying to render the abstract syntax tree object directly hence it will not work because this is our custom abstract syntax tree.

//* Below code will work because we are not following the react's syntax to create the object
// const anotherElement = (
//   <a href='google.com' target='_blank'>
//     click Me to visit Google
//   </a>
// );

/*
ReactDOM.createRoot(document.getElementById('root')).render(anotherElement); // Here first we are giving the html to the react's render method. we are trying to render the html using react. ReactDom.createRoot(document.getElementById('root')).render() will have its own implementation that is it will create its own abstract syntax tree with built-in notation. React will create a abstract syntax for us by using its built-in notation syntax, hence it will render the component/ function on UI because this is not our custom abstract syntax tree like before.
*/

/*
//! Deep knowledge: How react's built-in notation create the abstract syntax tree notation
const thirdElementUsingReact = React.createElement(
  //* expected parameter based on react's notation to create the element is like: tagName,attribute{href, blank}, context_data
  'a',
  { href: 'facebook.com', target: '_blank' },
  'Click me to visit facebook'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  thirdElementUsingReact
);

*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
