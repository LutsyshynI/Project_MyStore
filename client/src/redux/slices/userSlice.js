import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    selectedUser: null
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
});

const {reducer: userReducer, actions: {setUser,}} = userSlice;

const userActions = {
    setUser
}

export {
    userActions,
    userReducer
}