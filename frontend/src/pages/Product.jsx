import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useContext,useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {
  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState('')
  const [size, setsize] = useState('');
  
  const fetchproductdata=async()=>{
    const product = products.find(p => p._id === productId);
    setproductdata(product);
    if(product && product.image && product.image.length > 0){
      setimage(product.image[0]);
    }
    return null;
  }

  useEffect(()=>{
    fetchproductdata();
  },[productId, products])
  return productdata ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images and details can go here */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {productdata.image.map((img,index) => (
                <img onClick={()=>setimage(img)} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer ' src={img} alt={`Product Image ${index}`} />
              ))
              }
             
           </div>
            <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto' src={image} alt="Selected Product" />
              </div>
        </div>
        {/* Product details can go here */}
        <div className='flex-1'>
           <h1 className='text-2xl mt-2 font-medium'>{productdata.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
           </div>
           <p className='text-3xl font-medium mt-5'>{currency}{productdata.price}</p>
            <p className='text-sm mt-5 text-gray-600'>{productdata.description}</p>

            <div className='flex flex-col gap-4 my-8'>
              <p className='text-sm mt-5 text-gray-600'>Select Size</p>
          <div className='flex gap-2'> {productdata.sizes.map((s,index) =>  
            (<button onClick={()=>setsize(s)} className={`border py-2 px-4 bg-gray-100 border-none ${s === size ? 'bg-gray-300' : ''}`} key={index}>{s}</button> ))} 
          </div> 
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' >Add to Cart</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>cash on delivery is availble on this product</p>
            <p>Easy return return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*Product
      description */}
       <div className='mt-20'>
          <div className='flex border-b'>
            <b className='border-b-2 border-black px-5 py-3 text-sm cursor-pointer'>Description</b>
            <p className='px-5 py-3 text-sm cursor-pointer text-gray-500 hover:text-black transition'>Reviews(122)</p>
          </div>
          <div className='flex flex-col gap-4 border border-t-0 px-6 py-6 text-sm text-gray-700 leading-relaxed'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nulla soluta illum a, voluptates sequi sint fugit officia autem molestias explicabo vel harum necessitatibus perferendis asperiores labore aut sit maxime repellat! Mollitia sunt, inventore cum ducimus numquam pariatur esse omnis!</p>
          <p>This product is made with high-quality materials and excellent craftsmanship. Perfect for everyday wear with great comfort and durability.</p>
          </div>
       </div>

    </div>
  ) : <div className='opacity-0'>Loading...</div>;
}

export default Product

