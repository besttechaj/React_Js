import React, { useState } from 'react';

//! step 2: providing the context to the limited component using "UserContext.Provider" property ie., only provided components have the access to context. And also we have to pass the "value" property ( ie., data, it can be state, setState or any data ) which is accessible by all the components Wrapped inside the "UserContext.Provider" property.
import { UserContext } from './UserContext';
export const UserContextProvider = (props) => {
  const [user, setUser] = useState('');
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
