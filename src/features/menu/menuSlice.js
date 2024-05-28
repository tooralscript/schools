import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    uniClicked: false,
    schoolClicked: false,
    lyceumClicked: false,
  },
  reducers: {
    setUniClicked: (state, action) => {
      state.uniClicked = action.payload;
    },
    setSchoolClicked: (state, action) => {
      state.schoolClicked = action.payload;
    },
    setLyceumClicked: (state, action) => {
      state.lyceumClicked = action.payload;
    },
  },
});

export const { setUniClicked, setSchoolClicked, setLyceumClicked } =
  menuSlice.actions;

export default menuSlice.reducer;
