import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  FilterByIcon,
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  SortByIcon,
} from "../assets/icons";
import UserGridView from "./UserGridView";
import UserListView from "./UserListView";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";

const UserCardView = () => {
  const [isGridView, setIsGridview] = useState(true);
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState("false");
  const [isSearchExpanded, setIsSearchExpanded] = useState("false");

  const navigateToAddUser = () => {
    navigate("/add-user");
  };
  return (
    <div className="bg-[#F9F9F9]">
      <div className="  flex justify-between    font-semibold">
        <div className="text-2xl mt-8 ml-4 md:ml-8"> Users</div>
        <div className="flex">
          <button
            className={classNames("p-2 md:p-[10px] rounded-l-md border-2", {
              "bg-[#641CC0] text-white mt-8 border-transparent": !isGridView,
              "bg-white text-[#641CC0] mt-8 border-gray-300": isGridView,
            })}
            onClick={() => setIsGridview(false)}
          >
            <ListViewIcon className=" w-5 h-5" />
          </button>
          <button
            className={classNames(
              "border-[4px] p-2 border-[#641CC0] shadow-lg bg-[#641CC0] display:flex items-center",
              {
                "bg-[#641CC0] text-white mt-8 border-transparent": isGridView,
                "bg-white text-[#641CC0] mt-8 border-gray-300": !isGridView,
              }
            )}
            onClick={() => setIsGridview(true)}
          >
            <GridViewIcon className="" />
          </button>
          <button
            className="bg-[#641CC0] text-white p-2  mt-8 rounded-md w-20 h-10 md:w-40 md:h-12 ml-3 md:ml-5 mr-5 md:mr-9"
            onClick={navigateToAddUser}
          >
            <span className="md:hidden">+Add</span>
            <span className="hidden md:inline">+Add User</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-4 md:mt-8 rounded-lg  mx-2 md:mx-9">
        <div className="flex justify-between m-4 gap-4  w-full ">
          <div className="flex space-x-3">
            <button
              type="button"
              className="flex p-2 border h-10 border-[#777a81] rounded-md items-center  "
            >
              <SortByIcon className=" md:mr-2 " />
              <p className=" text-[#63666B] hidden lg:inline"> Sort by </p>
            </button>
            <button
              type="button"
              className="flex p-2 h-10 border border-[#777a81] rounded-md items-center"
            >
              <FilterByIcon className="md-mr-1 my-auto" />
              <p className="text-[#63666B] hidden lg:inline p-2"> Filter by </p>
            </button>
          </div>

          <div className="flex items-center mr-5 md:mr-7">
            <div
              className={classNames(
                "flex items-center gap-1 bg-white py-2 pl-2 pr-[4.5px] md:p-2 rounded-lg border border-[#777a81] ml-4",
                { "!border-[#2e4272]": isInputFocused }
              )}
            >
              <button
                type="button"
                className="h-6 aspect-square"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search here"
                className={classNames(
                  "bg-transparent outline-none text-black",
                  { "hidden md:block": !isSearchExpanded },
                  {
                    "w-20 md:w-48": !isSearchExpanded,
                    "w-full": isSearchExpanded,
                  }
                )}
                onBlur={() => {
                  setIsInputFocused(false);
                  setIsSearchExpanded(false);
                }}
                onFocus={() => setIsInputFocused(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {isGridView ? <UserGridView /> : <UserListView />}
      </div>
    </div>
  );
};

export default UserCardView;
