import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    device: [
        {id:1,name:'Iphone 12 pro',price:1200,rating:5},
        {id:2,name:'Iphone 12 pro',price:1200,rating:5},
        {id:3,name:'Iphone 12 pro',price:1200,rating:5},
        {id:4,name:'Iphone 12 pro',price:1200,rating:5},
        {id:5,name:'Iphone 12 pro',price:1200,rating:5},
        {id:6,name:'Iphone 12 pro',price:1200,rating:5},
        {id:7,name:'Iphone 12 pro',price:1200,rating:5},
        {id:8,name:'Iphone 12 pro',price:1200,rating:5},
    ],
    selectedDevice: null
};

const deviceSlice = createSlice({
    name: "deviceSlice",
    initialState,
    reducers: {
        getAll:(state, action)=>{
            state.device = action.payload
        }
    },

});

const {reducer: deviceReducer, actions: {getAll}} = deviceSlice;

const deviceActions = {getAll};

export {deviceReducer, deviceActions}