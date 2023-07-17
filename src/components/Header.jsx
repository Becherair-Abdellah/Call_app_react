import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import {HiShoppingCart} from 'react-icons/hi'
import logo from '../imgs/logo.png'
import avatar from '../imgs/avatar.png';
import {motion} from 'framer-motion'
import Links from "./Links";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsView } from "../redux/Reducers";
function Header() {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    // const [isView,setIsView] = useState(false)
    const isView =  useSelector(({my_view})=> my_view);
    const dispatch = useDispatch();
    const login = async ()=>{
        const response = await signInWithPopup(firebaseAuth,provider)
        console.log(response)
    }
    const myREf = useRef();
    useEffect(()=>{
      console.log(myREf.current)
    });
  return (
    <div className=" p-2 text-center mx-auto bg-gray-50 select-none" >
      <div className="w-[90%] p-3 flex justify-between items-center mx-auto" >
      <div className="icon">
        <HiShoppingCart size={30} className="text-red-500 cursor-pointer" />
      </div>
      <div className="img flex items-center">
        <motion.img whileTap={{
          scale:.6,
        }} src={logo} className="w-12 cursor-pointer" alt="" />
        <h1 className="text-3xl" >City</h1>
      </div>
      <div className="user" >
      <motion.img src={avatar} whileTap={{
        scale:.7,
      }} className="w-12 shadow-md rounded-full cursor-pointer " alt="" onClick={()=>{
        dispatch(setIsView());
      }} />
      {isView && <Links />}
      </div>
      </div>
    </div>
    
  )
}

export default Header
