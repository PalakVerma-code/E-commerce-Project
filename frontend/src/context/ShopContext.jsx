import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

 export const ShopContext = createContext();
 const ShopContextProvider = ({children})=>{
    const currency="₹";
    const delivery_charge=10;
    const [search, setsearch] = useState('')
    const [showsearch, setshowsearch] = useState(false)
    const value = {
        products,
        currency,
        delivery_charge,
        search,
        setsearch,
        showsearch,
        setshowsearch
    };
    
        return(
            <ShopContext.Provider value={value}>
                {children}
            </ShopContext.Provider>
        )
 }
 export default ShopContextProvider;
       
