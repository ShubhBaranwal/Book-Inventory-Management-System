import {configureStore} from "@reduxjs/toolkit";
import fetchBookSlice from "./fetchBookSlice";


const bookStore=configureStore({
    reducer:{
        bookStock:fetchBookSlice.reducer
    }
})

export default bookStore
