import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "../assets/styles/Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { openSendMessage } from "../store/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"
          alt=" "
          className="compose_plusIcon"
        />
        Compose
      </Button>
      <SidebarOption
        selected={true}
        Icon={InboxIcon}
        title="Inbox"
        number={54}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={48} many={true} />

      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={48}
        many={true}
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={48}
        many={true}
      />
      <SidebarOption Icon={SendIcon} title="Sent" number={48} many={true} />
      <SidebarOption
        Icon={InsertDriveFileIcon}
        title="Drafts"
        number={48}
        many={true}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={48}
        many={true}
      />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
