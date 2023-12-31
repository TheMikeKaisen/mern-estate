import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null, 
    loading: false,
};

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.laoding = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.laoding = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.laoding = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.laoding = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutUserStart: (state) => {
            state.laoding = true;
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.laoding = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    }
})

export const { signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserStart, updateUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess } = userSlice.actions;

export default userSlice.reducer;