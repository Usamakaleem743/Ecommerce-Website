import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false
    },
    reducers: {
        registerUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true
        }
    }
});
export const selectUser = (state) => state.authSlice.user;
export const selectToken = (state) => state.authSlice.token;
export const selectisAuthenticated = (state) => state.authSlice.isAuthenticated;
export const { registerUser } = authSlice.actions;
export default authSlice.reducer