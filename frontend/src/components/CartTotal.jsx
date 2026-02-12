import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
const CartTotal = () => { 
    const {getCartTotal,currency,delivery_charge}=useContext(ShopContext);
    
    
    return (
         <div className='w-full'>
            <div className='text-2xl'>
                <Tittle text1={'CART'} text2={'TOTAL'}/>
            </div>

             <div className='mt-4 rounded-lg border border-gray-200 bg-white p-5 text-sm shadow-sm'>
                  <div className='flex items-center justify-between py-2'>
                       <p className='text-gray-600'>Subtotal</p>
                       <p className='font-medium text-gray-900'>{currency}{getCartTotal()}.00</p>
                  </div>
                  <div className='h-px bg-gray-100' />
                  <div className='flex items-center justify-between py-2'>
                     <p className='text-gray-600'>Shipping Charge</p>
                     <p className='font-medium text-gray-900'>{currency}{delivery_charge}.00</p>
                  </div>
                  <div className='h-px bg-gray-100' />
                  <div className='flex items-center justify-between py-3 text-base'>
                       <p className='font-semibold text-gray-900'>Total</p>
                       <p className='font-semibold text-gray-900'>{currency}{getCartTotal() === 0 ? 0 : getCartTotal() + delivery_charge}.00</p>
                  </div>
                  <p className='mt-2 text-xs text-gray-500'>Taxes and discounts are calculated at checkout.</p>
                  </div>
             </div>
  )
}

export default CartTotal