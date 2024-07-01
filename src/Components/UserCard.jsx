import React, { useState } from "react";
import useUserStore from "./useUserStore";
import { useNavigate } from "react-router-dom";
import { OptionsIcon } from "../assets/icons";
import DeleteUser from "./DeleteUser";

export default function UserCard({ user }) {
  const navigate = useNavigate();
  const [dropdownopen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigateToEditUser = () => {
    navigate(`/edit-user/${user.id}`);
  };
  const handleDeleteUser = () => {
    setShowModal(true);
    useUserStore.getState().deleteUser(user.id);
    setShowModal(false);
    toast.error("User has been deleted successfully!");
    navigate("/");
    navigate("/users");
  };

  // relative flex flex-wrap items-center border border-[#777A81] p-2 rounded-md bg-[#FAFAFA] min-w-[300px] max-w-[336px] "

  return (
    <div className=" relative flex w-full max-w-[370px] items-center rounded-md border border-[#E0E0E2] bg-[#FAFAFA] p-4">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <DeleteUser
            onConfirm={handleDeleteUser}
            onCancel={() => setShowModal(false)}
          />
        </div>
      )}
      <div className="photo-container pr-4">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="rounded-full w-[75px] h-[75px] min-w-[75px] min-h-[75px]"
        />
      </div>
      <div className="flex flex-col justify-center text-[#63666B]">
        <p className="font-poppins text-[18px] font-medium leading-[27px] text-left">{`${user.firstName} ${user.lastName}`}</p>
        <p className="font-poppins text-[14px] font-normal leading-[21px] text-left text-ellipsis whitespace-nowrap overflow-hidden max-w-[180px]">
          {user.email}
        </p>
        <div className="flex  items-center h-8 ">
          {user.status === "Active" ? (
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(10,210,42,1)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          ) : (
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(255,153,0,1)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          )}{" "}
          {user.status}{" "}
        </div>
      </div>
      <div className="ml-auto mb-auto relative">
        <button
          onClick={() => setDropdownOpen(!dropdownopen)}
          className="focus:outline-none"
        >
          <OptionsIcon />
        </button>
        {dropdownopen && (
          <div className="absolute right-0 mt-2 w-40 py-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <button
              onClick={() => {
                navigateToEditUser();
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 text-left hover:bg-gray-100 w-full"
            >
              Edit
            </button>
            <button
              onClick={() => {
                setShowModal(true);
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 text-left hover:bg-gray-100 w-full"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
