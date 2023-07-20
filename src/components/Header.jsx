import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { HiShoppingCart } from 'react-icons/hi'
import logo from '../imgs/logo.png'
import avatar from '../imgs/avatar.png';
import { motion } from 'framer-motion'
import Links from "./Links";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsView ,setIsLogin,set_Data_user} from "../redux/Reducers";
import { data_of_user } from "../utils/FetchDataLocalStorage";
import NumItem from "./NumItem";
function Header() {
 
  // console.log(data_of_user().photoURL)
  
  // console.log('repeat');
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const isView = useSelector(({ my_view }) => my_view);
  const isLogin = useSelector((state) => state.my_login);
  const [userImg,setUserImg] = useState(data_of_user() !== undefined ?data_of_user().photoURL:avatar);
  // useSelector((state) => console.log(state));
  console.log(isLogin);
  isLogin?localStorage.setItem('is_Login',JSON.stringify(isLogin)):''
  
  const dispatch = useDispatch();
  const login = async () => {
    const {user} = await signInWithPopup(firebaseAuth, provider);
    dispatch(setIsLogin());
    // console.log(user.photoURL);
    setUserImg(user.photoURL)
    // dispatch(set_Data_user({providerId: "firebase", uid: "uFKp3fsunHOTt4NyADVuV9dGuS13", }));
    localStorage.setItem('user_data',JSON.stringify(user));
  }

  return (
    <div className=" p-2 text-center mx-auto bg-gray-50 select-none" >
      <div className="w-[90%] p-3 flex justify-between items-center mx-auto" >
        <div className="icon relative">
          <NumItem/>  
          <HiShoppingCart size={30} className="text-red-500 cursor-pointer" />
        </div>
        <div className="img flex items-center">
          <motion.img whileTap={{
            scale: .6,
          }} src={logo} className="w-12 cursor-pointer" alt="" />
          <h1 className="text-3xl" >City</h1>
        </div>
        <div className="user" >
          <motion.img src={userImg} whileTap={{
            scale: .7,
          }} className="w-12 shadow-md rounded-full cursor-pointer " alt="" onClick={() => {
            isLogin?dispatch(setIsView()):login();
            ;
          }} />
          {isView && <Links />}
        </div>
      </div>
    </div>

  )
}

export default Header
