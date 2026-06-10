// we will display all added items and their price
// we calculate the total price 

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){
    const {cart} = useContext(CartContext);

    // calculate the total price of the added items from the cart
    console.log("Cart:", cart);
    const totalPrice = cart.reduce((accum:any, product:any) => {
        return accum + product.price;
    }, 0);

    return (
        <div>
            {
                cart && cart.map((product:any) => (
                    <div key={product.id}>
                        <h3>{product.name} - ${product.price}</h3>
                        <hr />
                    </div>
                ))
            }
            <h3>TotalPrice: ${totalPrice}</h3>
        </div>
    )
}