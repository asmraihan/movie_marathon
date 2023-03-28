import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Email from './components/Email/Email'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className='flex justify-center px-20 mx-auto gap-10 my-5'>
        <div className='home w-9/12'>
            <Home/>
        </div>
        <div className='side-cart w-3/12'>
      <SideCart/>
        </div>
      </div>
      <Email />
    </div>
  )
}

export default App
