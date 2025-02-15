import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../fetaures/BookSlice";


const store = configureStore({
    reducer: {
        bookReducer: booksReducer,
    }
});

export default store;
