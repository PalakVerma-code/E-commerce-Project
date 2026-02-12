import React from 'react'
import { useContext ,useState,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
import ProductItem from './ProductItem';
const BestSeller = () => {
    const {products} = useContext(ShopContext);
   const [bestSeller, setBestSeller] = useState([])
   useEffect(()=>{
    const bestproduct = products.filter(product =>( product.bestseller));
    setBestSeller(bestproduct.slice(0,5));
   },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
  <Tittle text1={'OUR'} text2={'BESTSELLER'}/>
  <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, est eum labore voluptate nobis omnis ad </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((product,index) => (
                <ProductItem key={index} id={product._id} {...product} />
            ))}
        </div>
    </div>
  )
}

export default BestSeller