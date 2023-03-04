import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    brands: [
        {id: 1, name: "Samsung"},
        {id: 2, name: "Apple"},
        {id: 3, name: "Xiaomi"},
        {id: 4, name: "Lenovo"},
    ],
    selectedBrand: null
};

const brandSlice = createSlice({
    name: "brandSlice",
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.brands = action.payload
        },
        setSelectedBrand: (state, action) => {
            state.selectedBrand = action.payload
        }
    },

});

const {reducer: brandReducer, actions: {getAll, setSelectedBrand}} = brandSlice;

const brandActions = { getAll , setSelectedBrand}

export {brandReducer,brandActions}