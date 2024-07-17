import React, { useId } from 'react';

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id} className=''></label>}
      <select {...props} id={id} ref={ref} className={`${className}`}>
        {options
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : 'Unable to fetch options'}
      </select>
    </div>
  );
};

//! forward ref
export default React.forwardRef(Select);
