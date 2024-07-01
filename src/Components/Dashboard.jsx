import React from "react";
import useUserStore from "./useUserStore";
import {
  ActiveUsersIcon,
  InactiveUsersIcon,
  TotalUsersIcon,
} from "../assets/icons";
import TotalUsersChart from "./TotalUsersChart";

const Dashboard = () => {
  const users = useUserStore((state) => state.users);
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  return (
    <div className="md:ml-5">
      <div className="ml-4 mt-8 text-2xl font-normal">Dashboard</div>
      <div className="md:flex flex-wrap justify-center">
        {/* Total Users */}
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base">Total Users</div>
          <div className="mt-3 text-2xl font-medium">{totalUsers}</div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            <TotalUsersIcon />
          </div>
        </div>

        {/* Active Users */}
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base">Active Users</div>
          <div className="mt-3 text-2xl font-medium">{activeUsers}</div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            <ActiveUsersIcon />
          </div>
        </div>

        {/* Inactive Users */}
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="text-base">Inactive Users</div>
          <div className="mt-3 text-2xl font-medium">{inactiveUsers}</div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            <InactiveUsersIcon />
          </div>
        </div>

        {/* Total Users Chart */}
        <div className="m-5 w-full md:flex-1 md:mx-10 mt-10">
          <div className="p-5 w-full h-80 md:h-96 md:w-[551px] rounded-xl border shadow-lg bg-white">
            <TotalUsersChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
