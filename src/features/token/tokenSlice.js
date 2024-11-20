import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ""
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action;
        },
        deleteToken: (state) => {
            state.token = "";
        }
    }
});

export const { setToken, deleteToken} = tokenSlice.actions;

export default tokenSlice.reducer;