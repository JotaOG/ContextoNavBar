import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

export const NavBar = () => {
  const { val } = useContext(MyContext);
  return <div className='nav-bar'>Hello {val}!</div>;
};
