import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../assets/images/multikart_logo.png";
import { LinesIcon } from "../assets/icons";

export const MainpageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/sign-in") {
      navigate("/sign-up");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2 shadow-md md:py-2">
        <img
          className="m-3 h-[28px] w-[157px] md:ml-12"
          src={img}
          alt="multikart_logo"
        />
        <LinesIcon className={"mr-2 md:hidden"} />
        <button
          type="button"
          className="mr-20 hidden rounded-md border border-[#c4c4c4] px-5 py-2 text-sm font-normal md:inline"
          onClick={handleClick}
        >
          {location.pathname === "/sign-in" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};
