import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const products = [
    {
        id: 1,
        name: "Macbook Air M5",
        price: 1500
    },
    {
        id: 2,
        name: "Google Pixel 10 Pro Max",
        price: 1200
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 ultra",
        price: 2000
    }
];
// display all Products
// in front of each product - display addToCart Button
export default function Products(){
    const {cart, setCart} = useContext(CartContext);
    
    function addToCart(product:any){
        setCart([...cart, product]);
    }

    // display all products
    return (
        <div>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name} - ${product.price}</h3>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                ))
            }
        </div>
    )

}