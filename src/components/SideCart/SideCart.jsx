import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const SideCart = ({time}) => {
    
    const [updatedTime,setUpdatedTime] = useState(time)
    const [breakTime,setBreakTime] = useState(0)
    useEffect(()=>{
        const getWatchTimeFromStorage = localStorage.getItem('watch-time')
        setUpdatedTime(getWatchTimeFromStorage)
        const getBreakTime = localStorage.getItem('break-time')
        if(!getBreakTime){
            setBreakTime(0)
        }
        setBreakTime(getBreakTime)

    },[time])

    const handelBreakTime = (bt) =>{
    // console.log(bt)
    localStorage.setItem('break-time', bt)
    setBreakTime(10)
    }

    return (
        <div className='p-5 text-center bg-green-100 h-full'>
            <h3 className='text-2xl font-semibold py-5'>Side cart</h3>
            <div className='sticky top-10 border-2 bg-blue-300 p-5 rounded-md'>
            <p>Total Watch Time : </p>
            <p className='border-2 rounded-md my-2 bg-red-300 p-2'>{updatedTime}</p>
            <p className='my-2'>Add break time</p>
            <div>
                <button onClick={()=>handelBreakTime(10)} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>10</button>
                <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow'>20</button>
                <button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>30</button>
            </div>
            <p className='border-2 rounded-md my-2 bg-red-300 p-2'>{breakTime}</p>
            <button onClick={()=>toast("Wow so easy!")}
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Calculate
      </button>
            </div>
        </div>
    );
};

export default SideCart;