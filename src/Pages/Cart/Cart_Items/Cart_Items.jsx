import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import Cart_Item from "./Cart_Item";

const Cart_Items = () => {
    const [changed, setChanged] = useState( false )
    const [updated, setUpdated] = useState( false )
    const { saveCart } = useCart()
    const updateHandler = () => {
        setChanged(false)
        setUpdated(true)
    }
    return (
        <div className="flex-1">
            <div>
                {
                    saveCart?.map(cart => <Cart_Item key={cart._id} cart={cart} changed={changed} setChanged={setChanged} setUpdated={setUpdated} updated={updated} />)
                }
            </div>
            <div className="text-right">
                <button onClick={updateHandler} disabled={!changed} className="primary-btn">Update Cart</button>
            </div>
        </div>
    );
};

export default Cart_Items;