import React, { useState } from "react";
import { MyContext } from "../Context/MyContext";

export const Wrapper = ({children}) => {
    const [val, setVal] = useState('');
  return (
    <MyContext.Provider value={{val, setVal}}>
        {children}
    </MyContext.Provider>
  );
};
