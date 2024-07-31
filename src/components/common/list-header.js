import React from "react";

const ListHeader = ({ headerName, icon, iconName }) => {
  return (
    <h1 className="font-bold text-lg ">
      {headerName}
      {icon && (
        <img src={icon} alt={iconName} className="inline-flex h-3 ml-9" />
      )}
    </h1>
  );
};

export default ListHeader;
