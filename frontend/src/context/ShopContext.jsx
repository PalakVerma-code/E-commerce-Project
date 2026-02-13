import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

 export const ShopContext = createContext();
 const ShopContextProvider = ({children})=>{
    const currency="$";
    const delivery_charge=10;
    const [search, setsearch] = useState('')
    const [showsearch, setshowsearch] = useState(false)
    const navigate=useNavigate();
    const [cardItems, setcardItems] = useState({});
    const [orderData, setorderData] = useState({
        items: [],
        address: {},
        orderDate: null,
        orderId: null,
        status: 'Processing'
    });
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

    const placeOrder = async(deliveryInfo) => {
        // Convert cart items to order items format
        let orderItems = [];
        for(const itemId in cardItems){
            for(const size in cardItems[itemId]){
                if(cardItems[itemId][size] > 0){
                    const product = products.find(p => p._id === itemId);
                    if(product){
                        orderItems.push({
                            _id: itemId,
                            name: product.name,
                            price: product.price,
                            image: product.image[0],
                            size: size,
                            quantity: cardItems[itemId][size],
                            subtotal: product.price * cardItems[itemId][size]
                        });
                    }
                }
            }
        }
        
        // Generate order ID and date
        const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
        const orderDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Save order data
        setorderData({
            items: orderItems,
            address: deliveryInfo,
            orderDate: orderDate,
            orderId: orderId,
            status: 'Processing'
        });

        // Clear cart after order is placed
        setcardItems({});
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
        navigate,
        orderData,
        placeOrder
    };
    
        return(
            <ShopContext.Provider value={value}>
                {children}
            </ShopContext.Provider>
        )
 }
 export default ShopContextProvider;
       
