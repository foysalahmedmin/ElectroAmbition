import { createContext, useEffect, useState } from "react";
import { addToDb, getShoppingCart, removeFromDb } from "../Utilites/LocalStorageManage";
import axios from "axios";

export const CartContext = createContext(null)
const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const [saveCart, setSaveCart] = useState([])
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [totalCart, setTotalCart] = useState(0)
    const [Updated, setUpdated] = useState(false)

    useEffect(() => {
        const storedCart = getShoppingCart()
        const cartPCodes = Object.keys(storedCart)
        // console.log(cartPCodes)
        if (cartPCodes.length) {
            axios.post('https://electro-ambition-server.vercel.app/cartsProduct', { P_Codes: cartPCodes})
                .then(result => setCartProducts(result.data))
                .catch(error => console.error(error));
        }
    }, [])

    useEffect(() => {
        if (cartProducts) {
            const storedCart = getShoppingCart()
            const saveCart = [];
            let totalCart = 0
            let subTotal = 0 ;
            for (let PCode in storedCart) {
                const cartProduct = cartProducts.find(product => product.product_code === PCode)
                if (cartProduct) {
                    const cartQuantity = storedCart[PCode];
                    cartProduct.cart_quantity = cartQuantity;
                    cartProduct.cart_total = (cartProduct.discounted_price || cartProduct.price) * cartQuantity;
                    saveCart.push(cartProduct);
                }
            }
            setSaveCart(saveCart)
            if(saveCart){
                saveCart.forEach(cart => {
                    totalCart += cart.cart_quantity ;
                    subTotal += cart.cart_total ;
                })
                setTotalCart(totalCart)
                setCartSubTotal(subTotal)
            }
        }
    }, [Updated, cartProducts])

    const addCartHandle = (P_Code) => {
        const storedCart = getShoppingCart()
        const cartPCodes = Object.keys(storedCart)
        if (!cartPCodes.includes(P_Code)) {
            // console.log(P_Code, cartPCodes.includes(P_Code), [...cartPCodes, P_Code])
            axios.post('https://electro-ambition-server.vercel.app/cartsProduct', { P_Codes: [...cartPCodes, P_Code] })
                .then(result => setCartProducts(result.data))
                .catch(error => console.error(error));
        }
        addToDb(P_Code)
        setUpdated(!Updated)
    }
    const removeCartHandle = (P_Code) => {
        removeFromDb(P_Code)
        setUpdated(!Updated)
    }
    const CartInfo = {
        saveCart,
        totalCart,
        cartSubTotal,
        addCartHandle,
        removeCartHandle
    }
    return (
        <CartContext.Provider value={CartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;