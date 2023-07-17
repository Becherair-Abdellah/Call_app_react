import {createSlice} from '@reduxjs/toolkit'
// create Slice
const is_view = createSlice({
    name:'is_view',
    initialState: false,
    reducers:{
        setIsView: (state)=>state? state= false:state =true,
    }
});
export const  {setIsView} = is_view.actions;
export default is_view;