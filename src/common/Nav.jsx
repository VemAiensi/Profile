import React from "react";
import "./common.css";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function Nav({ fncs }) {
  const [togglePage, showAbout, showProjects, showCertificates] = fncs;
  const wideScreen = useMediaQuery("(min-width: 700px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="nav">
      <div className="brand">
        <img src="/white.svg" alt="" />
        <div className="nav-links" onClick={togglePage}>
          <span>V. A. Marasigan</span>
        </div>
      </div>
      {wideScreen ? (
        <div className="nav-links">
          <span onClick={showAbout}>ABOUT</span>
          <span onClick={showProjects}>PROJECTS</span>
          <span onClick={showCertificates}>CERTIFICATES</span>
        </div>
      ) : (
        <div className="nav-links">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="white"
          >
            <MenuIcon></MenuIcon>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                showAbout();
              }}
            >
              ABOUT
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                showProjects();
              }}
            >
              PROJECTS
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                showCertificates();
              }}
            >
              CERTIFICATES
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default Nav;
