import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserStore from "./useUserStore";
import { toast } from "react-toastify";
import { HomeIcon } from "../assets/icons/HomeIcon";

const EditUser = () => {
  const users = useUserStore((state) => state.users);
  const updateUser = useUserStore((state) => state.updateUser);
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [role, setRole] = useState(user?.role || "User");
  const [status, setStatus] = useState(user?.status || "Active");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const updatedUser = {
      id: user.id,
      photo: user.photo,
      firstName,
      lastName,
      email,
      phone,
      role,
      status,
      lastLogin: user.lastLogin,
    };

    updateUser(user.id, updatedUser);
    toast.success("User has been updated successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-[#f9f9f9] items-center text-[#63666b]">
      <div className="flex items-center text-black s-6 px-6 py-4 w-full">
        Users
        <div className="ml-auto flex items-center space-x-2">
          <div className="pr-2" onClick={() => navigate("/")}>
            <HomeIcon />
          </div>
          <span className="px-2 text-black" onClick={() => navigate("/")}>
            / Users
          </span>
          / <span className="px-2">Edit User</span>
        </div>
      </div>
      <div className="flex border mx-5 w-full mt-7 px-4 py-6 rounded">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              className="border w-full border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">
              Last Name <span className="text-red-500">* </span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email"> Email</label>
            <input
              type="text"
              id="email"
              value={email}
              placeholder="Email"
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Phone"
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role">Role </label>
            <select
              id="role"
              name="role"
              value={role}
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="User">User </option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="status">Status </label>
            <select
              id="status"
              name="status"
              value={status}
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status </option>
              <option value="Active">Active </option>
              <option value="Inactive">Inactive </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="border border-[#c4c4c4] rounded p-2 mt-1"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#641CC0] mt-1 text-white p-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
