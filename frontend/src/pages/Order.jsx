import React from 'react'
import Tittle from '../components/Tittle';
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
const Order = () => {
  const {products, currency, orderData}=useContext(ShopContext);
  const [expandedItem, setexpandedItem] = useState(null);
  
  // Helper function to generate full name
  const getFullAddress = () => {
    if(!orderData.address) return '';
    return `${orderData.address.address}, ${orderData.address.city}, ${orderData.address.state} ${orderData.address.pincode}, ${orderData.address.country}`;
  };

  // Helper function to get customer name
  const getCustomerName = () => {
    if(!orderData.address) return '';
    return `${orderData.address.firstName} ${orderData.address.lastName}`;
  };

  // Calculate total
  const getTotalAmount = () => {
    return orderData.items.reduce((total, item) => total + item.subtotal, 0);
  };

  // Handle track button
  const handleTrack = (itemIndex) => {
    alert(`Tracking item: ${orderData.items[itemIndex].name}\nEstimated delivery: 2-3 business days`);
  };

  // Handle ready to ship button
  const handleReadyToShip = (itemIndex) => {
    alert(`Item ${orderData.items[itemIndex].name} marked as ready to ship!`);
  };
  return (
    <div className='border-t pt-16'>
 <div className='txt-2xl'>
 <Tittle text1={'MY'} text2={'ORDER'}/>
 </div>
  <div className='mt-8 border rounded-lg p-5'>
    <div className='flex flex-col sm:flex-row gap-4'>
      <div className='w-full sm:w-1/2 border rounded-lg p-5'>
        <p className='text-gray-600'>Order ID: {orderData.orderId}</p>
        <p className='text-gray-600'>Date: {orderData.orderDate}</p>
        <p className='text-gray-600'>Status: {orderData.status}</p>
        <p className='text-gray-600'>Total: {currency}{getTotalAmount().toFixed(2)}</p>
      </div>
      <div className='w-full sm:w-1/2 border rounded-lg p-5'>
        <p className='text-gray-600'>Shipping Address:</p>
        <p className='text-gray-600'>{getCustomerName()}</p>
        <p className='text-gray-600'>{getFullAddress()}</p>
        <p className='text-gray-600'>Email: {orderData.address.email}</p>
        <p className='text-gray-600'>Phone: {orderData.address.phone}</p>
      </div>
    </div>
    <div className='mt-8'>
      <p className='text-gray-600 mb-4'>Items:</p>
      <div className='border rounded-lg p-5'>
        {orderData.items && orderData.items.length > 0 ? (
          orderData.items.map((item, index) => (
            <div key={index} className='mb-4'>
              <div className='flex items-center gap-4 pb-4 border-b last:border-b-0'>
                <img className='w-16' src={item.image} alt={item.name} />
                <div className='flex-1'>
                  <p className='text-gray-900 font-medium'>{item.name}</p>
                  <p className='text-gray-600'>Size: {item.size}</p>
                  <p className='text-gray-600'>Quantity: {item.quantity}</p>
                  <p className='text-gray-600'>Price: {currency}{item.subtotal.toFixed(2)}</p>
                </div>
                <div className='flex gap-2 flex-col sm:flex-row'>
                  <button 
                    onClick={() => handleTrack(index)}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap'>
                    Track
                  </button>
                  <button 
                    onClick={() => handleReadyToShip(index)}
                    className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap'>
                    Ready to Ship
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No items in this order</p>
        )}
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default Order