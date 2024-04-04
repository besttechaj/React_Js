//? How react works
//! step1- get the return html from the app.js component file (easy for developer to create project using different components and integrate all the components to the App.js file)
//! step2- React converts the html element into dom tree
//! step3- Using dom, react will again create the html element from the dom tree by fetching all the attribute, context data, element NAme from the dom tree and after creating the element, it will append the element to the DOM's UI.

// targeting the element inside the html file
let mainContainer = document.querySelector('#root');

//! study case: Suppose you want to render one <a></a> tag

//* React will compile your code (return html tag from your App.js file) and create a tree like structure from it like below code
//* Any html's element is given to a function to create its tree like structure like below code:

//* consider you are returning one <a></a> tag from App.js file and now react is creating a tree like structure from it.

const reactElement = {
  // name of the element
  type: 'a',

  // Passing the element's attribute
  props: {
    href: 'google.com',
    target: '_blank',
  },

  // content inside the element
  children: 'Click me to visit google',
};

//* Now we need a render() method so that we can add/ append it to the root element
//* customRender( what you want to inject, where to inject)
//* designing one custom render function
const customRender = (injectElement, injectLocation) => {
  /*
  // creating dom element
  let domElement = document.createElement(injectElement.type);

  // adding the content inside dom element
  domElement.innerHTML = injectElement.children;

  // setting the attribute for dom's element
  domElement.setAttribute('href', injectElement.props.href);

  // setting the next attribute for dom's element
  domElement.setAttribute('target', injectElement.props.target);

  // appending the dom element
  injectLocation.appendChild(domElement);
  */
  //! The problem in the above code is that what happens if the return element has n no. of attributes inside it.In the above code we are setting the attribute for 2 attributes only. Hence to overcome this problem we can declare for in loop so that it will create attribute based on no. of attributes.

  // creating dom element
  let domElement = document.createElement(injectElement.type);

  // adding the content inside dom element
  domElement.innerHTML = injectElement.children;

  for (prop in injectElement.props) {
    // some time user also pass children inside prop
    if (prop === 'children') continue;
    // setting the attribute for dom's element
    domElement.setAttribute(prop, injectElement.props[prop]);
  }

  // appending the dom element
  injectLocation.appendChild(domElement);
};

customRender(reactElement, mainContainer);
