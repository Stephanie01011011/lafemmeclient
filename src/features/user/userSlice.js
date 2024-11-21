import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: 0,
    userName: "",
    userEmail: "",
    userCart: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        deleteUserId: (state) => {
            state.userId = 0;
        },
        setName: (state, action) => {
            state.userName = action.payload;
        },
        setEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        setCart: (state, action) => {
            state.userCart = action.payload;
        },
    }
});

export const { setUserId, deleteUserId, setName, setEmail, setCart} = userSlice.actions;

export default userSlice.reducer;