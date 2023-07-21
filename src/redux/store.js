import { configureStore } from "@reduxjs/toolkit";
import {is_view,is_Login,data_user,counter_items} from "./Reducers";
const store = configureStore({
    reducer:{
        my_view: is_view.reducer, 
        my_login:is_Login.reducer,
        data_of_user: data_user.reducer,
        counter_item:counter_items.reducer,
    }
});
export default store;