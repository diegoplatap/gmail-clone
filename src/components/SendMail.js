import React from "react";
import "../assets/styles/SendMail.css";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../store/mailSlice";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { db } from "../firebase";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import PhotoIcon from "@material-ui/icons/Photo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = formData => {
    console.log(formData);

    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail_header">
        <h3>New Message</h3>
        <MinimizeIcon className="sendMail_minimize" />
        <FontAwesomeIcon
          className="sendMail_maximize"
          icon={faExpandAlt}
          size="xs"
        />
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!</p>
        )}
        <textarea
          placeholder="Message"
          type="text"
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required!</p>
        )}
        <div className="sendMail_options">
          <div className="sendMail_optionsLeft">
            <Button
              className="sendMail_send"
              variant="contained"
              color="primary"
              type="sumbit"
              endIcon={<ArrowDropDownIcon />}
            >
              Send
            </Button>
            <IconButton>
              <FormatColorTextIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <LinkIcon />
            </IconButton>
            <IconButton>
              <EmojiEmotionsIcon />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon
                className="sendMail_googleDrive"
                icon={faGoogleDrive}
                // size="xs"
              />
            </IconButton>
            <IconButton>
              <PhotoIcon />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon
                className="sendMail_confidential"
                icon={faUserSecret}
                // size="xs"
              />
            </IconButton>
          </div>
          <div className="sendMail_optionsRight">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
