import React from "react";
import { LinesIcon } from "../assets/icons/LinesIcon";
const NavBar = () => {
  return (
    <div className="h-14 bg-[#ffffff] shadow-md">
      <div className="flex items-center h-full">
        <LinesIcon className={"ml-8"} />
      </div>
    </div>
  );
};

export default NavBar;
