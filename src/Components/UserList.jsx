import React, { useCallback, useEffect, useState, useMemo } from "react";
import classNames from "classnames";
import {
  FilterByIcon,
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  SortByIcon,
  LeftArrowIcon,
} from "../assets/icons";

import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import UserGridView from "./UserGridView";
import UserListView from "./UserListView";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";
import useUserStore from "./useUserStore";
import Pagination from "./Pagination";
import SortByMenu from "./SortByMenu";
import sortUser from "../utils/userFunctions";

const UserList = () => {
  const [isGridView, setIsGridview] = useState(true);
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState("false");
  const [isSearchExpanded, setIsSearchExpanded] = useState("false");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("");
  const users = useUserStore((state) => state.users);
  // useEffect(() => {
  //   console.log("Search Query:", searchQuery);
  //   console.log("Filtered Users:", filteredUsers);
  // }, [searchQuery]);
  // const filteredUsers = users.filter(
  //   (user) =>
  //     user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     user.email.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, users]
  );
  const totalRecords = users.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  const navigateToAddUser = () => {
    navigate("/add-user");
  };
  const handleSortOptionChange = useCallback((option) => {
    setSortOption(option);
  }, []);
  const sortedUser = useMemo(() => {
    return sortUser({ filteredUsers, sortOption });
  }, [filteredUsers, sortOption]);

  return (
    <div className="bg-white">
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
      <div className=" bg-white">
        <div className="flex flex-col justify-between mt-4 md:mt-8 rounded-lg  mx-2 md:mx-9">
          <div className="flex justify-between m-4 gap-4  w-full ">
            <div className="flex space-x-3">
              <SortByMenu
                sortOption={sortOption}
                setSortOption={handleSortOptionChange}
              />
              {/* <button
                type="button"
                className="flex p-2 border h-10 border-[#777a81] rounded-md items-center  "
              >
                <SortByIcon className=" md:mr-2 " />
                <p className=" text-[#63666B] hidden lg:inline"> Sort by </p>
              </button> */}
              <button
                type="button"
                className="flex p-2 h-10 border border-[#777a81] rounded-md items-center"
              >
                <FilterByIcon className="md-mr-1 my-auto" />
                <p className="text-[#63666B] hidden lg:inline p-2">
                  {" "}
                  Filter by{" "}
                </p>
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
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log(searchQuery);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {isGridView ? (
            <UserGridView users={paginatedUsers} />
          ) : (
            <UserListView users={paginatedUsers} />
          )}
        </div>
        {/* <div className="m-2 flex text-[#63666b]">
          <div className="text-sm font:normal md:text-base"> */}
        {/* <span> Records will be displayed </span>
            <input
              type="number"
              className="w-7 border-b-2 border-[#e5e5e5] md:w-14"
            />
          </div>
          <div className="text-sm font-normal md:text-base">
            Records will be displayed like 1-10
          </div> */}
        {/* <div className="flex">
            <RightArrowIcon />
            <LeftArrowIcon />
          </div>
        </div> */}
        <Pagination
          currentPage={currentPage}
          totalRecords={totalRecords}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          LeftArrowIcon={LeftArrowIcon}
          RightArrowIcon={RightArrowIcon}
        />
      </div>
    </div>
  );
};

export default UserList;
