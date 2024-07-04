import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabaseClient";
import { MainpageHeader } from "./MainpageHeader";
import { SignupImage } from "../assets/images/SignupImage";

export const UserSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { first_name: firstName, last_name: lastName },
        },
      });
      if (error) {
        if (error.message.includes("Email rate exceeded")) {
          toast.error("Too many signup attempts, please try again later");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("Signup successful, verify your email to login");
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-center">
        <div className="flex max-w-screen-xl md:mt-12">
          <div className="hidden h-[529px] w-[765px] md:inline-block">
            <SignupImage />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 md:ml-10 md:w-96 md:border-0">
            <div className="text-lg font-medium md:text-2xl">
              Sign up as a new user
            </div>
            <div>
              <div className="text-sm font-normal text-[#7e7e7e] md:text-base">
                or already registered?{" "}
                <Link to="/" className="text-[#641cc0]">
                  Login now
                </Link>
              </div>
              <form className="mt-9 md:mt-12" onSubmit={handleSignUp}>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mb-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:h-14"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
