import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="Logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    © 2024 Your Company. All rights reserved.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='text-gray-600 flex flex-col gap-2'>
                    <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>HOME</li>
                    <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>About us</li>
                    <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>Delivery</li>
                <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Contact</p>
                <ul className='text-gray-600 flex flex-col gap-2'>
                    <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>+1 234 567 890</li>
                    <li className='mb-2 cursor-pointer text-gray-600 hover:text-gray-800'>info@yourcompany.com</li>
                </ul>
            </div>
        </div>
        <hr className='text-gray-300' />
            <p className='text-center text-gray-500 text-xs py-5'>© 2024 Your Company. All rights reserved.</p>
    </div>
  )
}

export default Footer