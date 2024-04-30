import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  //! Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>This is user component</h2>

      <h1>User component with user id: {id}</h1>
    </div>
  );
}
