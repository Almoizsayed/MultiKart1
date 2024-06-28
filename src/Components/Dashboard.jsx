import React from "react";
import useUserStore from "./useUserStore";
import { ActiveUsersIcon } from "../assets/icons";
import { InactiveUsersIcon } from "../assets/icons";
import { TotalUsersIcon } from "../assets/icons/";

const Dashboard = () => {
  const users = (state) => state.users;
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => (user.status = "Active")).length;
  const inactiveUsers = users.filter(
    (user) => (user.status = "Inactive")
  ).length;
  return (
    <div className="md:ml=5">
      <div className="ml-4 mt-8 text-2xl font-normal">DashBoard</div>
      <div className=" md:flex">
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base">Total Users</div>
          <div className="mt-3 text-2xl font-medium">{totalUsers}</div>{" "}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            {" "}
            <TotalUsersIcon />
          </div>
        </div>
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base"> ActiveUsers</div>
          <div className="mt-3 text-2xl font-medium">{activeUsers}</div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7] ">
            {<ActiveUsersIcon />}
          </div>
        </div>
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base">InactiveUsers </div>
          <div className="mt-3 text-2xl font-medium">{inactiveUsers} </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            <InactiveUsersIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;