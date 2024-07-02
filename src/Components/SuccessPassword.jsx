import React from "react";
import { MainpageHeader } from "./MainpageHeader";
import { SuccessfulImage } from "../assets/images/SuccessfulImage";
import { useNavigate } from "react-router-dom";

export const SuccessPassword = () => {
  const navigate = useNavigate();

  const handleBackToLogIn = () => {
    navigate("/sign-in");
  };
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="m-4 flex flex-col items-center justify-center rounded-md border p-4 shadow-md md:flex-grow md:border-none md:shadow-none">
        <SuccessfulImage sizeClass="w-16 h-16 md:w-24 md:h-24" />
        <div className="mt-3 text-lg font-medium md:mt-5 md:text-2xl">
          Successful Password Reset !
        </div>
        <div className="mt-1 max-w-[450px] text-center text-sm font-normal md:text-lg">
          <span>You can now use your new password to </span>{" "}
          <br className="md:hidden" />
          <span>login to your account</span>
        </div>
        <button
          type="submit"
          className="mb-5 mt-8 block w-full rounded-md bg-[#641cc0] p-2 text-base font-medium text-white md:mt-10 md:w-[450px] md:p-3 md:text-lg"
          onClick={handleBackToLogIn}
        >
          Back to Login
        </button>
      </div>

      <div className="mt-auto bg-[#f5f6f8] py-4 text-center text-xs font-light text-[#4f5665]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
