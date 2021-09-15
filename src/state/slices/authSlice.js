import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    isLoaded: false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loaded: (state) => {
            state.isLoading = false;
            state.isLoaded = true;
        }
    }
})

export const { loading, loaded } = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;