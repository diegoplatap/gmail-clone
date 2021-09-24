import React from "react";
import "../assets/styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../store/userSlice";
import { auth } from "../firebase";

function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <a href="#home">
          <img
            onClick={() => history.push("/")}
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x"
            alt=""
          />
        </a>
      </div>

      <div className="header_middle">
        <Box pl={0.7} mr={-0.5}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <input placeholder="Search mail" type="text" />
        <Box pr={0.75}>
          <IconButton>
            <ArrowDropDownIcon className="header_inputCaret" />
          </IconButton>
        </Box>
      </div>

      <div className="header_right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          onClick={signOut}
          src={user?.photoUrl}
          className="avatar"
          style={{ height: "32px", width: "32px" }}
        />
      </div>
    </div>
  );
}

export default Header;
