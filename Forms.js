import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

export const Forms = () => {
  const { val, setVal } = useContext(MyContext);
  
  return (
    <form className='form'>
      <label htmlFor='name'>Your Name:</label>
      <input type="text" name='name' id='name' onChange={(e) => setVal(e.target.value)} value={val}/>
    </form>
  );
};
