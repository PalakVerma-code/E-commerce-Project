import React, { useState,useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const{setshowsearch,getCartItemsCount} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
     <Link to='/'>
      <img src={assets.logo} className='w-36' alt="Logo" />
     </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1' >
           <p>Home</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1' >
           <p>Collection</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1' >
           <p>About</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1' >
           <p>Contact</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
   
      </ul>
      <div className='flex items-center gap-6 '>
          <img onClick={()=>setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />
          <div className='group relative'>
           <Link to='/login'> <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
           </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded'>
                   <p className='cursor-pointer hover:text-black'>My Profile</p>
                   <p className='cursor-pointer hover:text-black'>Orders</p>
                   <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
       
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="Cart" />
            <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'> {getCartItemsCount()} </p>
          </Link>
          <img onClick={()=>setIsMenuOpen(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isMenuOpen ? 'w-full' : 'w-0'} `}>
          <div className='flex flex-col text-grey-600'>
              <div className='flex items-center gap-4  p-5'>
                  <img onClick={()=>setIsMenuOpen(false)} src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="Close" />
                  <p>Back</p>
              </div>
              <NavLink onClick={()=>setIsMenuOpen(false)} to='/' className='py-2 pl-6 border' >
                 <p>HOME</p>
              </NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to='/collection' className='py-2 pl-6 border' >
                 <p>COLLECTION</p>
              </NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to='/about' className='py-2 pl-6 border' >
                 <p>ABOUT</p>
              </NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to='/contact' className='py-2 pl-6 border' >
                 <p>CONTACT</p>
              </NavLink>
          </div>
      </div>
</div>
  )
}

export default Navbar