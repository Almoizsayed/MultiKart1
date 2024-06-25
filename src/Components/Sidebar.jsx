import React from "react";
import img from "../assets/images/multikart_logo.png";
import { DashboardIcon, LinesIcon, UsersIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="md:w-64 md:h-full md:fixed md:shadow-md">
      <div className="flex items-center p-3 shadow-md md:flex-col md:h-full">
        <img className="w-[157px] h-[28px]" src={img} alt="" />
        <div className="ml-auto md:hidden">
          <LinesIcon />
        </div>
        <div className="hidden md:block md:mt-10 md:self-start md:ml-9 text-gray-600">
          <div className=" uppercase">Main Menu</div>
          <div>
            <div className="flex items-center mt-7 text-lg">
              <div className="mr-3">
                <DashboardIcon />
              </div>
              Dashboard
            </div>
            <div className="flex items-center mt-7 text-lg">
              <div className="mr-3">
                <UsersIcon />
              </div>
              Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
