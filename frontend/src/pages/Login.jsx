import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [currentForm, setcurrentForm] = useState('Login'); // 'login' or 'register'
   const handleInputChange = async(e) => {
    // Handle input changes if needed
     e.preventDefault();
  }
  return (
    <form onSubmit={handleInputChange} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currentForm}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

          </div>
            {currentForm==='Login'?'':<input required className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder=' Name' />}
          <input required className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="email" placeholder='Email' />
          <input required className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="password" placeholder='Password' />
          <div className='w-full flex justify-between text-sm mt-2'>
            <p>Forgot your password?</p>
          {
            currentForm==='Login'?<><p>Don't have an account? <span onClick={()=>setcurrentForm('Register')} className='text-blue-500 cursor-pointer'>Register here</span></p></>:
            <><p>Already have an account? <span onClick={()=>setcurrentForm('Login')} className='text-blue-500 cursor-pointer'>Login here</span></p></>
          }

          </div>
          <button className='bg-black text-white text-sm my-8 px-8 py-3'>{currentForm==='Login'?'Sign in': 'Sign up'}</button>

    </form>
  )
}

export default Login