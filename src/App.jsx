import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import { setIsLogin } from './redux/Reducers'
function App() {
  localStorage.getItem('is_Login')?setIsLogin():console.log('run tool')
  useSelector((state)=>console.log(state))
  return (
    <>
    <Header/>
    </>
  )
}

export default App
