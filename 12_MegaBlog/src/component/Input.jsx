import React, { useId } from 'react';
import './Input.css';
//! forward ref: Suppose you are creating a form ( login/ signup ). You are creating the input field as an component so that it can be used more than once for other inout types also. Since we need to have all the access of data from input field component to our form, we can use a hook known as forwardRef hook() to take the reference of our input field.

//* CREATING A CUSTOM INPUT FIELD COMPONENT WHICH CAN BE USED FOR ALL INPUT TYPES
const Input = React.forwardRef(function Input(
  //* fetching all the attributes through props
  { label, type = 'text', className = '', ...props },
  //* reference :: most important
  ref
) {
  // Generating unique ids
  const id = useId();
  return (
    <div className='inputComponent'>
      {/* //* Using all the attributes  */}
      {label && (
        <label className='' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`$className`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
