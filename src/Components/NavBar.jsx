import React from "react";
import { LinesIcon } from "../assets/icons";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error during sign out:", error);
        toast.error("Failed to sign out. Please try again.");
      } else {
        console.log("User signed out successfully");
        toast.success("Signed out successfully");
        setIsAuthenticated(false); // Update authentication state
        navigate("/sign-in");
      }
    } catch (err) {
      console.error("Unexpected error during sign out:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-14 items-center justify-between bg-[#ffffff] shadow-md">
      <div className="flex h-full items-center">
        <LinesIcon className="ml-8" />
      </div>
      <div className="mr-14 hidden md:inline">
        <button
          type="button"
          className="rounded-md bg-[#641cc0] p-2 px-3 text-[#fafafa]"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
