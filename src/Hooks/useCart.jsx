import { useContext } from "react";
import { CartContext } from "../provider/CartProvider";

const useCart = () => {
    const cart = useContext(CartContext)
    return cart
};

export default useCart;