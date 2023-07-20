import { useSelector } from "react-redux";
export const Source =  () =>{
    useSelector((state)=>console.log(state));
    return(
        <>
        </>
    )
}
export const data_of_user = ()=>{


    const user = localStorage.getItem('user_data') !==null?
    JSON.parse(localStorage.getItem('user_data')):localStorage.clear();
    return user;
}