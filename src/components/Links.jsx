
import {motion} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsView} from '../redux/Reducers';
import {FiLogOut} from 'react-icons/fi';
export default function Links() {
  const linkRef = useRef();
  useSelector((state)=>{console.log(state)})
  useSelector((state)=>{console.log(state.my_view)})
  const isLogin = useSelector((state)=>state.my_login);
  console.log(isLogin);
  const dispatch = useDispatch();
  useEffect(()=>{
     const handleClick = (ev)=>{
      if( linkRef.current && !linkRef.current.contains(ev.target)){
        dispatch(setIsView());
        console.log('its occure!')
      }

      // add events
    }
    setTimeout(()=>{
    document.addEventListener('click',handleClick);

    },10)
    return ()=>{
    // document.removeEventListener('click',handleClick);
    document.removeEventListener('click',handleClick);
    }
  },[])
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }} className='block bg-gray-50 shadow-lg lg:shadow-none lg:flex lg:justify-between lg:items-center lg:gap-3 text-start text-gray-500 p-2 px-8 rounded-lg absolute lg:relative right-10' ref={linkRef} >
      <ul className="" >
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Home</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Services</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>About us</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Contact</li>
        {isLogin && <li className='mt-2 hover:text-red-500 cursor-pointer flex gap-4 items-center'><FiLogOut/>logout</li>}
      </ul>
    </motion.div>
  )
}
