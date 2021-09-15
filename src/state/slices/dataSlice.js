import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empData: [],
    isLoading: false,
    isLoaded: false
}

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
        }
        
    }
})

export const { dataLoading, dataLoaded, dataTransfer } = dataSlice.actions;

export const dataState = (state) => state.data;

export default dataSlice.reducer;