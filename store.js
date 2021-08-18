import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./reducers/navSlice";
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
      navigation: navReducer,
      user : userReducer
  }
});

export default store;
