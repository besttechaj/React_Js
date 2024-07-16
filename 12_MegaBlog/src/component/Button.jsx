import React from 'react';

const Button = ({ children, className = '', type = 'button', ...props }) => {
  return (
    <button className={`${className} `} {...props}>
      {children}
    </button>
  );
};

export default Button;
