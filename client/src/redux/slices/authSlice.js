import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: true
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
    },
});

const {reducer: authReducer, actions: {setIsAuth}} = authSlice;

const authActions = {
    setIsAuth
}

export {
    authActions,
    authReducer
}