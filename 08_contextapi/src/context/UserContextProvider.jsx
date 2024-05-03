import React from 'react';

//! step 2: providing the context to the limited component ie., only provided components have the access to context.
import { UserContext } from './UserContext';
export const UserContextProvider = (props) => {
  console.log(props);
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <UserContext.Provider value={''}>{props.children}</UserContext.Provider>
    </>
  );
};
