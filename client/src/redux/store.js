import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {authReducer} from "./slices/authSlice";
import {deviceReducer} from "./slices/deviceSlice";
import {typeReducer} from "./slices/typeSlice";
import {brandReducer} from "./slices/brandSlice";

const rootReducer = combineReducers({
    users: userReducer,
    auth: authReducer,
    device: deviceReducer,
    type: typeReducer,
    brand: brandReducer
});

const setUpStore = configureStore({
    reducer: rootReducer
});

export {setUpStore}
