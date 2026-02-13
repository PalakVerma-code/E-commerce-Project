import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../components/CartTotal'
const Cart = () => {
  const {products ,currency,cardItems,updateCartItemQuantity,navigate} = useContext(ShopContext);
  const [cartProducts, setcartProducts] = useState([]);
 useEffect(()=>{
   
    let itemdata = [];
    for(const item in cardItems){
      for(const size in cardItems[item]){
        if(cardItems[item][size]>0){
        itemdata.push({
          _id: item,
          size: size,
          quantity: cardItems[item][size],
        })
      }
    }
}
setcartProducts(itemdata); 
 },[cardItems,products])

  return (
    <div className='border-t pt-14'>
      <div className=' text-3xl mb-3'>
        <Tittle text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
            {cartProducts.map((item,index)=>{const product = products.find(p => p._id === item._id); return(
               <div key={index} className=' border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 border-t py-4'> 
               <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={product.image[0]} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium '>{product.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                        <p className='px-2 sm:px-3 sm:py-1 border bg-s;ate-50'>Size: {item.size}</p>
                       <p>{currency}{product.price * item.quantity}</p>
                        
                  </div>
                </div>
               </div>
               <input onChange={(e)=>updateCartItemQuantity(item._id,item.size,parseInt(e.target.value))} className='border max-w-20 px-1 sm:px-2 py-1 ' type="number" min={1} defaultValue={item.quantity} />
               <img onClick={()=>updateCartItemQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                </div> ) })}

      </div>
      <div className='flex justify-end my-20'>
            <div className='w-full sm:w-112.5'>
                 <CartTotal />
                 <div className='w-full text-end'>
                       <button onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                 </div>
            </div>
      </div>
    </div>
  )
}

export default Cart