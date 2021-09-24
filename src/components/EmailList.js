import { Box, IconButton, Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../assets/styles/EmailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CheckBox from "@material-ui/core/Checkbox";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setEmails(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Select</span>}>
            <Box mr={-2.7}>
              <CheckBox size="small" />
            </Box>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Select</span>}>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Refresh</span>}>
            <IconButton>
              <FontAwesomeIcon
                className="fontawesome"
                icon={faRedo}
                size="xs"
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>More</span>}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="emailList_settingsRight">
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Newer</span>}>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "0.7rem" }}>Older</span>}>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              <span style={{ fontSize: "0.7rem" }}>Input tools on/off</span>
            }
          >
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="#d93025" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
