import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { MainpageHeader } from "./MainpageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

  return <div></div>;
};
