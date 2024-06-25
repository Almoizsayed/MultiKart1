import React from "react";
import UserCard from "./UserCard";
import useUserStore from "./useUserStore";
const UserGridView = () => {
  const users = useUserStore((state) => state.users);
  return (
    <div className="flex justify-start items-center flex-wrap gap-4 p-5 md:p-8 ">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
