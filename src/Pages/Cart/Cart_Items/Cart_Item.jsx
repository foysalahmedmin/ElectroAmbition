import { FaX } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import { useEffect, useState } from "react";

const Cart_Item = ({cart, setChanged, updated, setUpdated}) => {
    const [Q, setQ] = useState(cart.cart_quantity)
    const { removeCartHandle, updateCartDb } = useCart()
    const changeHandler = (e) => {
        setQ(+e.target.value)
        setChanged(true)
        setUpdated(false)
    }
    useEffect(()=>{
        if(updated){
            updateCartDb(cart.product_code, Q || 0)
        }
    },[updated, cart])

    return (
        <div className="w-full flex gap-3 items-center justify-between mb-3">
            <div>
                <FaX onClick={() => removeCartHandle(cart.product_code)} className="hover:text-primary cursor-pointer" />
            </div>
            <div>
                <img className="h-20 w-20 object-cover" src={cart.image} alt="" />
            </div>
            <div>
                <h3 className="text-xl font-bold">{cart.name}</h3>
            </div>
            <div>
                <input onChange={changeHandler} type="number" className="input rounded-none border-2 border-primary" defaultValue={cart.cart_quantity} min={1} max={cart.stock} />
            </div>
            <div>
                <p><span className="font-black">৳</span>{cart.cart_total}</p>
            </div>
        </div>
    );
};

export default Cart_Item;