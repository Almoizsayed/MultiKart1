import React, { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { FilterByIcon, RightTickIcon } from "../assets/icons";

const FilterbyRole = ({ filterOption, setFilterOption }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleMenuItemClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      setFilterOption(null);
      localStorage.removeItem("filterOption");
    } else {
      setSelectedOption(option);
      setFilterOption(option);
      localStorage.setItem("filterOption", option);
    }
    setOpen(false);
  };

  const isSelected = (option) => selectedOption === option;

  const handleIconClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleIconClick}
          className="flex rounded-md border border-[#777a81] p-2"
        >
          <FilterByIcon
            className="my-1 md:mr-1"
            style={{ cursor: "pointer" }}
          />
          <span className="hidden lg:inline">Filter By</span>
        </button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className="text-xs text-[#63666b] md:text-sm"
                    style={{ paddingRight: "20px" }}
                  >
                    <MenuItem
                      onClick={() => handleMenuItemClick("User")}
                      className="relative"
                    >
                      User
                      {isSelected("User") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Admin")}
                      className="relative"
                    >
                      Admin
                      {isSelected("Admin") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default FilterbyRole;
