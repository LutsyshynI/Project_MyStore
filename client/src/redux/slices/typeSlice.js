import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    types: [
        {id: 1, name: "Laptops"},
        {id: 2, name: "Smartphones"},
        {id: 3, name: "Tablets"},
        {id: 4, name: "Headphone"},
    ],
    selectedType: null
};

const typeSlice = createSlice({
    name: "typeSlice",
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.types = action.payload
        },
        setSelectedType: (state, action) => {
            state.selectedType = action.payload
        }
    },

});

const {reducer: typeReducer, actions: {getAll, setSelectedType}} = typeSlice;

const typeActions = { getAll , setSelectedType}

export {typeReducer,typeActions}