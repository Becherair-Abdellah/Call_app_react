import { configureStore } from "@reduxjs/toolkit";
import is_view from "./Reducers";
const store = configureStore({
    reducer:{
        my_view: is_view.reducer, 
    }
});
export default store;