import {createSlice} from '@reduxjs/toolkit'
import { data_of_user } from '../utils/FetchDataLocalStorage';
// create Slice is view manu bar 
const is_view = createSlice({
    name:'is_view',
    initialState: false,
    reducers:{
        setIsView: (state)=>state? state= false:state =true,
    }
});

// create Slice is login
const is_Login = createSlice({
    name:'is_login',
    initialState: false,
    reducers:{
        setIsLogin: (state)=>state? state= false:state =true,
    }
});

// create Slice 
// create Slice
const initStat_data = data_of_user();
// console.log(initStat_data)
const data_user = createSlice({
    name:'data_user',
    initialState: {
        user: null,
    },
    reducers:{
        set_Data_user(state,action){
            // console.log(state);
            // console.log(action);
            state.user = action.payload
            // return action.payload
        }
    }
}); 

export const  {setIsView} = is_view.actions;
export const  {setIsLogin} = is_Login.actions;
export const  {set_Data_user} = data_user.actions;
export {   
    is_view,
    is_Login,
    data_user,
} 
    