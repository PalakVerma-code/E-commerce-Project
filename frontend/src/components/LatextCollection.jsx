import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem'

const LatextCollection = () => {
    const {products}=useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([])
  useEffect(() => {
   setLatestProduct(products.slice(0, 10));
  }, []);
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
     <Tittle text1={'LATEST'} text2={'COLLECTION'}/> 
     <p className='w-3/4 m-auto text-xs sm:text-baxe text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, est eum labore voluptate nobis omnis ad </p>
      </div>
     {/* products grid  */}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {latestProduct.map((product,index) => (
        <ProductItem key={index} id={product._id} {...product} />
      ))}
     </div>

    </div>
  )
}

export default LatextCollection