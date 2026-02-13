import React from 'react'
import Tittle from '../components/Tittle'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
const PlaceOrder = () => {
  const [method, setmethod] = useState('cod')
  const {navigate, placeOrder}=useContext(ShopContext);
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePlaceOrder = () => {
    // Validate form data
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.address || 
       !formData.city || !formData.state || !formData.pincode || !formData.country || !formData.phone) {
      alert('Please fill all the fields');
      return;
    }

    // Call placeOrder with form data and payment method
    placeOrder({
      ...formData,
      paymentMethod: method
    });

    // Navigate to order page
    navigate('/order');
  }
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex-flex-col gap-4 w-full sm:max-w-120 '>
        <div className='text-xl sm:text-2xl my-3'>
          <Tittle text1={'DELIVERY'} text2={'INFORMATION'}/>
         </div>
          <div className='flex  gap-3'>
            <input onChange={handleInputChange} name='firstName' value={formData.firstName} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='First Name' />
            <input onChange={handleInputChange} name='lastName' value={formData.lastName} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='Last Name' />
            </div>
             <input onChange={handleInputChange} name='email' value={formData.email} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="email" placeholder='Email' />
              <input onChange={handleInputChange} name='address' value={formData.address} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='Address' />
              <div className='flex  gap-3'>
            <input onChange={handleInputChange} name='city' value={formData.city} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='City' />
            <input onChange={handleInputChange} name='state' value={formData.state} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='State' />
            </div>
            <div className='flex  gap-3'>
            <input onChange={handleInputChange} name='pincode' value={formData.pincode} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="number" placeholder='pincode' />
            <input onChange={handleInputChange} name='country' value={formData.country} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="text" placeholder='country' />
            </div>
            <input onChange={handleInputChange} name='phone' value={formData.phone} className='border border-gray-300  rounded px-3.5 py-1.5 w-full' type="number" placeholder='Phone No' />
      </div>
         {/*right side*/}
          <div className='mt-8'>
            <div className='mt-8 min-w-80'>
             <CartTotal />
             </div>
              <div className='mt-12'>
                <Tittle text1={'PAYMENT'} text2={'METHOD'}/>
                <div className='flex flex-col gap-3 lg:flex-row'>
                  <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                     <p  className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='stripe'?'bg-green-400':'bg-white'}`}></p>
                     <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                  </div>
                  <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                     <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='razorpay'?'bg-green-400':'bg-white'}`}></p>
                     <img className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
                  </div>
                  <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                     <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='cod'?'bg-green-400':'bg-white'}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4 '>Cash On Delivery</p>
                  </div>
                </div>
                <div className='w-full text-end mt-8'>
                       <button onClick={handlePlaceOrder} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>PLACE ORDER</button>
                </div>
               

                </div>

          </div>

    </div>
  )
}

export default PlaceOrder