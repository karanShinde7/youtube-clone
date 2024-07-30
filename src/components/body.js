import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";

const Body = () => {
  return (
    <div  className='flex'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Body;
