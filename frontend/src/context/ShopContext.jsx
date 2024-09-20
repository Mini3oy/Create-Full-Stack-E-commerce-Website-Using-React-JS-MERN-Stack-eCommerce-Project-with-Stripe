
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // Assume products is an array of product objects with properties like id, name, price, etc.

    const currency = '$';
    const delivery_fee = 10;
    
    const value = {
        products,currency,delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;