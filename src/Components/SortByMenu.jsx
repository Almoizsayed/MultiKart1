import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { RightTickIcon, SortByIcon } from "../assets/icons";

const SortByMenu = ({ sortOption, setSortOption }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // for default sort option
  useEffect(() => {
    if (!sortOption) {
      setSortOption("Created Date");
    }
  }, [sortOption, setSortOption]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
    setSortOption(option);
    setOpen(false);
  };

  const isSelected = (option) => option === sortOption;

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className="flex rounded-md border border-[#777a81] p-2"
        >
          <SortByIcon className="my-1 md:mr-1" />
          <span className="hidden md:inline">Sort By</span>
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
                    style={{ paddingRight: "20px" }} // Adjusted padding for reserved space
                  >
                    <MenuItem
                      onClick={() => handleMenuItemClick("Last Updated")}
                      className="relative" // Reserved space class for alignment
                    >
                      Last Updated
                      {isSelected("Last Updated") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Created Date")}
                      className="relative"
                    >
                      Created Date
                      {isSelected("Created Date") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("A to Z")}
                      className="relative"
                    >
                      A to Z
                      {isSelected("A to Z") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Z to A")}
                      className="relative"
                    >
                      Z to A
                      {isSelected("Z to A") && (
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

export default SortByMenu;
