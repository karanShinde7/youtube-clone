import React from "react";

const ListItem = ({ url, alt, itemName }) => {
  return (
    <li className="flex p-2 hover:bg-slate-200 cursor-pointer rounded-lg">
      <img src={url} alt={alt} className="h-7 mr-2 hover:cursor-pointer" />
      <label className="font-bold hover:cursor-pointer">{itemName}</label>
    </li>
  );
};

export default ListItem;
