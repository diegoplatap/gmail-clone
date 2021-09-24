import React from "react";
import "../assets/styles/Mail.css";
import { Avatar, Box, IconButton } from "@material-ui/core";
import ArroBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelIcon from "@material-ui/icons/Label";
import MorevertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router";
import PrintIcon from "@material-ui/icons/Print";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../store/mailSlice";
import { selectUser } from "../store/userSlice";

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  const user = useSelector(selectUser);

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsleft">
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Back to Inbox</span>}
          >
            <IconButton onClick={() => history.push("/")}>
              <ArroBackIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Archive</span>}>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Report spam</span>}
          >
            <IconButton>
              <ErrorIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Delete</span>}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <span style={{ color: "#d3d3d3" }}>{"|"}</span>
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Mark as unread</span>}
          >
            <IconButton>
              <MarkunreadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Snooze</span>}>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Add to tasks</span>}
          >
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
          <span style={{ color: "#d3d3d3" }}>{"|"}</span>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Labels</span>}>
            <IconButton>
              <LabelIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>More</span>}>
            <IconButton>
              <MorevertIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="mail_toolsright">
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Print all</span>}
          >
            <IconButton>
              <PrintIcon />
            </IconButton>
          </Tooltip>

          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>In new window</span>}
          >
            <IconButton>
              <OpenInNewIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <Tooltip
            title={<span style={{ fontSize: "0.7rem" }}>Important</span>}
          >
            <IconButton className="mail_important">
              <LabelImportantIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <p className="mail_time">
            {selectedMail?.time}
            <Tooltip
              title={<span style={{ fontSize: "0.7rem" }}>Not starred</span>}
            >
              <Box pl={0.5}>
                <IconButton>
                  <StarBorderIcon fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          </p>
        </div>

        <div className="user_info">
          <Avatar
            src={user?.photoUrl}
            className="avatar"
            style={{ height: "40px", width: "40px" }}
          />
          <p className="user_infoEmail">{selectedMail?.title}</p>
        </div>

        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
