import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import mailReducer from "./mailSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
