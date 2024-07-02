import React, { useState } from "react";
import { MainpageHeader } from "./MainpageHeader";
import { SigninImage } from "../assets/images/SigninImage";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserSignin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // refer: https://supabase.com/docs/reference/javascript/auth-signinwithpassword#:~:text=Response-,Sign%20in%20a%20user,-Log%20in%20an

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Sign-in successful!");
      setIsAuthenticated(true);
      navigate("/users");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-center">
        <div className="flex max-w-screen-xl md:mt-12">
          <div className="hidden h-[529px] w-[765px] md:ml-[-200px] md:mr-10 md:inline-block">
            <SigninImage />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 shadow-md md:w-96">
            <div className="text-lg font-medium md:text-2xl">Login</div>
            <form className="mt-7 md:mt-10" onSubmit={handleSignIn}>
              <label htmlFor="email" className="text-sm">
                Email ID / Username
              </label>
              <input
                id="email"
                type="text"
                className="mb-2 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mb-3 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link to="/forgot-password" className="text-sm text-[#641cc0]">
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="mb-5 mt-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:mt-8 md:h-14"
              >
                Login
              </button>
              <div className="mb-8 w-full text-center text-sm font-normal text-[#4f5665] md:mb-16 md:text-base">
                <span>New User?{"  "}</span>
                <Link
                  to="/sign-up"
                  className="text-[#0d0d0e] underline underline-offset-2"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
