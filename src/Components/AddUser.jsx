import React, { useState } from "react";
import useUserStore from "./useUserStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "../assets/icons/HomeIcon";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastLogin, setLastlogin] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { users, lastUserId } = useUserStore();
  const [isUserAdded, setIsUserAdded] = useState(false);

  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected to invoke preventDefault()

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    const newUserId = lastUserId + 1;
    const newUser = {
      id: newUserId,
      photo: "https://via.placeholder.com/100",
      firstName,
      lastName,
      email,
      phone,
      role,
      status,
      lastLogin: new Date().toISOString(),
    };

    addUser(newUser); // Move addUser logic inside handleSubmit

    // Reset form fields and navigate after successful submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setRole("User");
    setStatus("Active");
    setPassword("");
    setConfirmPassword("");

    navigate("/"); // Move navigation inside handleSubmit
    toast.success("User Added Successfully");
  };

  return (
    <div className="flex flex-col bg-[#f9f9f9] items-center text-[#63666b]">
      <div className="flex items-center text-black s-6 px-6 py-4 w-full">
        {" "}
        Users
        <div className=" ml-auto flex items-center space-x-2">
          <div className=" pr-2" onClick={() => navigate("/")}>
            <HomeIcon />{" "}
          </div>
          <span className="px-2  text-black" onClick={() => navigate("/")}>
            / Users
          </span>{" "}
          / <span className="px-2 ">Add User</span>
        </div>
      </div>
      <div className=" flex border mx-5 w-full mt-7 px-4 py-6 rounded ">
        <form onSubmit={handleSubmit} className=" w-full space-y-4">
          <div className="flex   flex-col">
            <label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              className="border w-full border-[#c4c4c4] rounded p-2 mt-1 "
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">
              Last Name<span className="text-red-500"> * </span>{" "}
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
            <div className="flex flex-col">
              <label htmlFor="role">Role </label>
              <select
                id="role"
                name="role"
                value={role}
                className="border border-[#c4c4c4] rounded p-2 mt-1"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>{" "}
                <option value="User">User </option>
                <option value="Admin"> Admin</option>
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
                Password <span className="text-red-500">*</span>{" "}
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
              <label htmlFor="confirmpassword">
                Confirm Password <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="password"
                id="confirmpasword"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
