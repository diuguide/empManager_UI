import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  empData: [],
  isLoading: false,
  isLoaded: false,
  searchData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataLoading: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    dataTransfer: (state, action) => {
      state.empData = action.payload;
    },
    dataLoaded: (state) => {
      state.isLoading = false;
      state.isLoaded = true;
    },
    filterData: (state, action) => {
      switch (action.payload.filter) {
        case "employee": {
          state.searchData = state.empData.filter(
            (emp) => emp.employee_id === parseInt(action.payload.field)
          );
          break;
        }
        case "department": {
          state.searchData = state.empData.filter(
            (emp) => emp.department_id === parseInt(action.payload.field)
          );
          break;
        }
        case "job": {
          state.searchData = state.empData.filter(
            (emp) => emp.job_id === action.payload.field
          );
          break;
        }
        default:
          break;
      }
    },
  },
});

export const { dataLoading, dataLoaded, dataTransfer, filterData } =
  dataSlice.actions;

export const dataState = (state) => state.data;

export default dataSlice.reducer;
