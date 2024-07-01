import React from "react";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import classnames from "classnames";
import { DashboardIcon, UsersIcon } from "../assets/icons";

const MobileView = ({ open, onClose, anchorEl }) => {
  const handleClick = (event) => {
    onClose();
  };
  const isActive = (path) => {
    return window.location.pathname;
  };
  const activeColor = "#641cc0";
  const defaultColor = "#63666B";

  return (
    <Menu
      id="mobile-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem
        component={Link}
        to="/dashboard"
        className={classnames("flex items-center text-lg", {
          "bg-[#f0e9f9] text-[#641cc0]": isActive("/dashboard"),
        })}
        onClick={handleClick}
      >
        <DashboardIcon
          color={isActive("/dashboard") ? activeColor : defaultColor}
        />
        <span className="ml-3">Dashboard</span>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/users"
        className={classnames("flex items-center text-lg", {
          "text-[#641cc0]": isActive("/users"),
        })}
        onClick={handleClick}
      >
        <UsersIcon color={isActive("/users") ? activeColor : defaultColor} />
        <span className="ml-3">Users</span>
      </MenuItem>
    </Menu>
  );
};

export default MobileView;
