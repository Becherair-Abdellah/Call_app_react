import {createSlice} from '@reduxjs/toolkit'
// create Slice
const is_view = createSlice({
    name:'is_view',
    initialState: false,
    reducers:{
        setIsView: (state)=>state? state= false:state =true,
    }
});

// create Slice
const is_Login = createSlice({
    name:'is_login',
    initialState: false,
    reducers:{
        setIsLogin: (state)=>state? state= false:state =true,
    }
});

// create Slice 
// create Slice
const data_user = createSlice({
    name:'data_user',
    initialState: '',
    reducers:{
        set_Data_user(state,action){
            console.log(state);
            console.log(action);
            return action.payload
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
    