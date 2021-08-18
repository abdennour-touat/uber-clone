import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {setName, setEmail} = userSlice.actions;

//Selectors
export const selectName = (state) => state.user.name;
export const selectDestination = (state) => state.user.name;

export default userSlice.reducer;