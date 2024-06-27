import React, { useCallback, useState, useMemo } from "react";
import classNames from "classnames";
import {
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../assets/icons";
import UserGridView from "./UserGridView";
import UserListView from "./UserListView";
import { useNavigate } from "react-router-dom";
import useUserStore from "./useUserStore";
import Pagination from "./Pagination";
import SortByMenu from "./SortByMenu";
import FilterbyRole from "./FilterbyRole";
import { sortUser, filterByRole } from "../utils/userFunctions";

const UserList = () => {
  const [isGridView, setIsGridview] = useState(true);
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const users = useUserStore((state) => state.users);

  const filteredUsers = useMemo(() => {
    let result = users;

    if (searchQuery) {
      result = result.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption) {
      result = sortUser({ users: result, sortOption });
    }

    if (filterOption) {
      result = filterByRole({ users: result, filterOption });
    }

    return result;
  }, [searchQuery, sortOption, filterOption, users]);

  const totalRecords = filteredUsers.length;
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

  const handleFilterOptionChange = useCallback((option) => {
    setFilterOption(option);
  }, []);

  return (
    <div className="bg-white">
      <div className="flex justify-between font-semibold">
        <div className="text-2xl mt-8 ml-4 md:ml-8">Users</div>
        <div className="flex">
          <button
            className={classNames("p-2 md:p-[10px] rounded-l-md border-2", {
              "bg-[#641CC0] text-white mt-8 border-transparent": !isGridView,
              "bg-white text-[#641CC0] mt-8 border-gray-300": isGridView,
            })}
            onClick={() => setIsGridview(false)}
          >
            <ListViewIcon className="w-5 h-5" />
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
            className="bg-[#641CC0] text-white p-2 mt-8 rounded-md w-20 h-10 md:w-40 md:h-12 ml-3 md:ml-5 mr-5 md:mr-9"
            onClick={navigateToAddUser}
          >
            <span className="md:hidden">+Add</span>
            <span className="hidden md:inline">+Add User</span>
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-col justify-between mt-4 md:mt-8 rounded-lg mx-2 md:mx-9">
          <div className="flex justify-between m-4 gap-4 w-full">
            <div className="flex space-x-3">
              <SortByMenu
                sortOption={sortOption}
                setSortOption={handleSortOptionChange}
              />
              <FilterbyRole
                filterOption={filterOption}
                setFilterOption={handleFilterOptionChange}
              />
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {isGridView ? (
            <UserGridView users={users} />
          ) : (
            <UserListView users={users} />
          )}
        </div>
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
