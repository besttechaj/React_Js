import React from 'react';
import './Button.css';
//! Use this button custom button in anywhere.
const Button = ({ children, className = '', type = 'button', ...props }) => {
  return (
    <button className={`${className} `} {...props}>
      {/* //! chidren is used. hence you can give any name to the button  */}
      {children}
    </button>
  );
};

export default Button;
