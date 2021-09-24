import { React } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import CheckBox from "@material-ui/core/Checkbox";
import { Box, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

import "../assets/styles/EmailRow.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectMail } from "../store/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Box mr={-2} ml={-0.5} className="hand">
          <DragIndicatorIcon />
        </Box>
        <Box mr={-0.8}>
          <CheckBox size="small" />
        </Box>
        <Box mr={-1.18}>
          <IconButton>
            <StarOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton>
          <LabelImportantIcon fontSize="small" />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{title}</h3>

      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
