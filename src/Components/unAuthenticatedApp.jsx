import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserSignin } from "./UserSignin";
import { ForgotPassword } from "./ForgotPassword";
import { ResetPassword } from "./ResetPassword";
import { SuccessPassword } from "./SuccessPassword";
import { UserSignup } from "./UserSignup";

const UnauthenticatedApp = ({ setIsAuthenticated }) => {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<UserSignup />} />
        <Route
          path="/sign-in"
          element={<UserSignin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success-password" element={<SuccessPassword />} />
      </Routes>
    </div>
  );
};

export default UnauthenticatedApp;
