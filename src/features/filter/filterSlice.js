import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedYear: "",
    searchQuery: "",
  },
  reducers: {
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state) => {
      state.selectedYear = "";
      state.searchQuery = "";
    },
  },
});

export const { setSelectedYear, setSearchQuery, clearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
