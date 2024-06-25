import React from "react";
import useUserStore from "./useUserStore";

export default function UserCard({ user }) {
  return (
    <div className="relative flex items-center border border-black p-2 rounded-md bg-[#FAFAFA] min-w-[300px] max-w-[336px] ">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(100,28,192)"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
    </div>
  );
}
