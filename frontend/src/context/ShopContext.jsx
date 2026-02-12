import { createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";

 export const ShopContext = createContext();
 const ShopContextProvider = ({children})=>{
    const currency="$";
    const delivery_charge=10;
    const [search, setsearch] = useState('')
    const [showsearch, setshowsearch] = useState(false)
    const [cardItems, setcardItems] = useState({});
    const addToCart= async(itemId,size)=>{
        if(!size){
            toast.error("Please select a size");
            return;
        }

        let carddata=structuredClone(cardItems)
        if(carddata[itemId]){
            if(carddata[itemId][size]){
                carddata[itemId][size]+= 1;
            } else {
                carddata[itemId][size] = 1
            }
        } else {
            carddata[itemId] = {};
            carddata[itemId][size] = 1;
        }
        setcardItems(carddata);
    }
  useEffect(()=>{
  
  },[cardItems])
   
  const getCartItemsCount=()=>{
    let count = 0;
     for(const items in cardItems){
        for(const item in cardItems[items]){
           try{
            if(cardItems[items][item]>0){
            count += cardItems[items][item];
         }
        }
            catch(err){ 
                
             }

         }
     }
     return count;
  }  
     const updateCartItemQuantity=async(itemId,size,quantity)=>{
        let carddata=structuredClone(cardItems)
        if(carddata[itemId] && carddata[itemId][size]){
            carddata[itemId][size] = quantity;
        }
        setcardItems(carddata);
    }
    const getCartTotal=()=>{
        let total = 0; 
        for(const items in cardItems){
             for(const item in cardItems[items]){
                 try{ if(cardItems[items][item]>0){ 
                    const product = products.find(p => p._id === items); if(product){ 
                        total += product.price * cardItems[items][item]; }
                     }
                     } 
                     catch(err){ 

                     }
                     } 
                    } 
                    return total;
                 }

    const value = {
        products,
        currency,
        delivery_charge,
        search,
        setsearch,
        showsearch,
        setshowsearch,
        cardItems,
        addToCart,
        getCartItemsCount,
        updateCartItemQuantity,
        getCartTotal,
    };
    
        return(
            <ShopContext.Provider value={value}>
                {children}
            </ShopContext.Provider>
        )
 }
 export default ShopContextProvider;
       
