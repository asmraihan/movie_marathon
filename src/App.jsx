import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Email from './components/Email/Email'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [time, setTime] = useState('') /* //!imp forgot local theke data show start myb */
  const addToCart=(watchTime)=>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watch-time'))
    if(previousWatchTime){
      const newWatchTime = previousWatchTime + watchTime
      localStorage.setItem('watch-time',newWatchTime)
      setTime(newWatchTime)
    }else{
      localStorage.setItem('watch-time',watchTime)
      setTime(watchTime)
    }
  }
  return (
    <div className="App">
      <Header />
      <div className='flex justify-center px-20 mx-auto gap-10 my-5'>
        <div className='home w-9/12'>
            <Home addToCart={addToCart} />
        </div>
        <div className='side-cart w-3/12'>
      <SideCart time={time} />
        </div>
      </div>
      <Email />
      <ToastContainer/>
    </div>
  )
}

export default App
