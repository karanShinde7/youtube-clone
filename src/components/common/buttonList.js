import React from "react";
import Button from "./button";

const listOfButton = [
  "All",
  "Cricket",
  "Gaming",
  "Songs",
  "Cooking",
  "Soccar",
  "Comedy",
  "Live"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {listOfButton.map((button, index) => {
        return <Button buttonName={button} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
