import { configureStore } from "@reduxjs/toolkit";
import {is_view,is_Login,data_user} from "./Reducers";
const store = configureStore({
    reducer:{
        my_view: is_view.reducer, 
        my_login:is_Login.reducer,
        data_of_user: data_user.reducer,
    }
});
export default store;