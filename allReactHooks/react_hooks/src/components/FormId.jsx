/*
useId hook source:https://www.youtube.com/watch?v=OvXEVuKtmfU&t=9s
*/

import { useId } from 'react';

const FormId = ({ title }) => {
  //! Generate the unique id, it is very useful if you are creating the n no. of components using the one created component. Hence it will provide unique id to each generated components.
  const id = useId();
  return (
    <>
      <h1>{title}</h1>
      <div>
        <label htmlFor={id + 'firstName'}>First Name</label>
      </div>
      <div>
        <input id={id + 'firstName'} type='text' />
      </div>

      <hr />

      <div>
        <label htmlFor={id + 'lastName'}>last Name</label>
      </div>
      <div>
        <input id={id + 'lastName'} type='text' />
      </div>
    </>
  );
};

export default FormId;
