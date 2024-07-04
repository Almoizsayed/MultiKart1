import React, { useState } from "react";
import { MainpageHeader } from "./MainpageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotUser = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:5173/reset-password",
      });

      if (error) {
        if (error.message.includes("rate limit")) {
          toast.error(
            "You have exceeded the email request limit. Please try again later."
          );
        } else {
          toast.error(error.message);
        }
      } else {
        toast.info(
          "Password reset link sent to your email, if you've registered."
        );
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="items-center md:flex md:flex-grow md:justify-center">
        <form
          className="mx-3 mt-4 rounded-md border p-4 shadow-lg md:w-[450px] md:border-0 md:text-center md:shadow-none"
          onSubmit={handleForgotUser}
        >
          <div className="text-lg font-medium md:text-4xl">
            Forgot your Password
          </div>
          <div className="text-sm font-light md:text-lg">
            Enter your email address
          </div>
          <div className="mt-11 text-sm md:text-left md:text-base">
            Email Address
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email ID"
            className="mt-1 w-full rounded-md border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 block w-full rounded-md bg-[#641cc0] p-2 text-base font-medium text-white md:p-3 md:text-lg"
          >
            Recover Password
          </button>
          <div className="mt-4 flex w-full items-center justify-center text-sm font-normal text-[#7e7e7e]">
            Return to{" "}
            <Link to="/sign-in" className="ml-1 text-[#641cc0]">
              Login
            </Link>
          </div>
        </form>
      </div>

      <div className="mt-auto bg-[#f5f6f8] py-4 text-center text-xs font-light text-[#4f5665]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
