// create the cart Context

import { createContext } from "react";
import { useState } from "react";

// Create the Cart Context
export const CartContext = createContext<any>(null);

// create the CartContextProvider - CartProvider
export const CartProvider = ({children}:any) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

// Wrap the entire App component inside CartProvider