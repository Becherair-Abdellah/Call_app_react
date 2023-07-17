
import {motion} from 'framer-motion'
import { useEffect, useRef } from 'react'
export default function Links() {
  const linkRef = useRef();
  useEffect(()=>{
  });
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }} className='block bg-gray-50 shadow-lg lg:shadow-none lg:flex lg:justify-between lg:items-center lg:gap-3 text-start text-gray-500 p-2 px-8 rounded-lg absolute lg:relative right-10' ref={linkRef} >
      <ul className="" >
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Home</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Services</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>About us</li>
        <li className='mt-2 hover:text-red-500 cursor-pointer'>Contact</li>
      </ul>
    </motion.div>
  )
}
