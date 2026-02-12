import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem'
const RelatedProduct = ({category,subcategory}) => {
    const {products} = useContext(ShopContext);
    const [relatedProduct, setrelatedProduct] = useState([]);
useEffect(()=>{
   
    if(products.length > 0){
        const related = products.filter(product => product.category === category && product.subCategory === subcategory);
        setrelatedProduct(related.slice(0,5));
    }

},[category,subcategory,products])

  return (
    <div className='my-24'>
    <div className='text-center text-3xl py-2'>
     <Tittle text1={'RELATED'} text2={'PRODUCTS'}/>
</div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
                 {relatedProduct.map((product,index) =>
                  (<ProductItem key={index} id={product._id} {...product} />
                 ))} 

         </div>
    </div>
  )
}

export default RelatedProduct