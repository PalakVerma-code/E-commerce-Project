import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Tittle from '../components/Tittle';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showsearch}=useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterproduct, setfilterproduct] = useState([])
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [sortType, setsortType] = useState("relavent");
  const toggleCategory=(e)=>{
     if(category.includes(e.target.value)){
      setcategory(category.filter(item => item !== e.target.value));
     } else {
      setcategory([...category, e.target.value]);
     }
  }
  const toggleSubCategory=(e)=>{
    if(subcategory.includes(e.target.value)){
     setsubcategory(subcategory.filter(item => item !== e.target.value));
    } else {
     setsubcategory([...subcategory, e.target.value]);
    }

  }
  const applyfilter=()=>{
    let filtered = [...products];
    if(showsearch && search){
      filtered = filtered.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    // Apply category filter
    if(category.length > 0){
      filtered = filtered.filter(product => category.includes(product.category));
    }
    
    // Apply subcategory filter
    if(subcategory.length > 0){
      filtered = filtered.filter(product => subcategory.includes(product.subCategory));
    }
    
    // Apply sorting
    switch(sortType){
      case "low_high":
        filtered.sort((a,b) => a.price - b.price);
        break;
      case "high_low":
        filtered.sort((a,b) => b.price - a.price);
        break;
      default:
        // "relavent" - keep original order
        break;
    }
    
    setfilterproduct(filtered);
  }

  useEffect(()=>{
    applyfilter();
  },[category,subcategory,products,sortType,search,showsearch])

  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options */}
      <div className='min-w-60'>
       <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTERs
        <img className={`h-3 sm:hidden  ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
       </p>
       {/*categories*/}
       <div className={`border border-gray-300 rounded-md pl-5 py-3 mt-6 ${showFilter ? "block" : "hidden"} sm:block`}>
        <p className='text-sm font-medium mb-3'>Categories</p>
       <div className='flex flex-col gap-2 text-gray-600 text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
             <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
             <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
       </div>
       </div>
       {/*subcategory filter */}
        <div className={`border border-gray-300 rounded-md pl-5 py-3 my-5 ${showFilter ? "block" : "hidden"} sm:block`}>
        <p className='text-sm font-medium mb-3'>TYPE</p>
       <div className='flex flex-col gap-2 text-gray-600 text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
             <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
             <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
       </div>
       </div>
      </div>
      {/* products */}
      <div className='flex-1'>
     <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'All'} text2={'Collection'} />
          {/*product count or sorting options can go here */}
          <select className='border-2 border-gray-300 text-sm px-2' value={sortType} onChange={(e) => setsortType(e.target.value)}>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low_high">Sort by: Low to High</option>
            <option value="high_low">Sort by: High to Low</option>
          </select>
     </div>
     {/* product grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {filterproduct.map((product,index)=>(
          <ProductItem key={index} id={product._id} {...product} />
        ))}
        </div>
      </div>
       </div>
  )
}

export default Collection