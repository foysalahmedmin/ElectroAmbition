import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";

const Carts_Details = () => {
    const { cartSubTotal } = useCart()
    const shippingDB = localStorage.getItem('electroAmbition-shipping')
    const [shipping, setShipping] = useState( shippingDB || 100)
    const shippingHandle = (e) => {
        setShipping(+(e.target.value))
        localStorage.setItem('electroAmbition-shipping', +(e.target.value))
    }
    useEffect(()=> {
        const shippingDB = localStorage.getItem('electroAmbition-shipping')
        if(!shippingDB){
            localStorage.setItem('electroAmbition-shipping', 100)
        }
    }, [shipping])
    return (
        <div className="md:w-1/3 p-3 border border-base-content">
            <div className="py-3 flex justify-between items-center">
                <p className="text-xl font-semibold mb-3">Subtotal</p>
                <p><span className="font-black">৳</span>{cartSubTotal}</p>
            </div>
            <div className="py-3">
                <p className="text-xl font-semibold mb-3">Shipping</p>
                <form action="">
                    <div className="flex justify-between items-center mb-2">
                        <div className=" flex gap-2 items-center">
                            <input onChange={shippingHandle } className="radio radio-warning" type="radio" name="shipping" id="dhaka" value={100} defaultChecked={shipping == 100} />
                            <label htmlFor="dhaka">Inside Dhaka City (ঢাকা সিটির ভিতর)</label>
                        </div>
                        <div><span className="font-black">৳</span>100</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                            <input onChange={shippingHandle} className="radio radio-warning" type="radio" name="shipping" id="outSiteDhaka" value={150} defaultChecked={shipping == 150} />
                            <label htmlFor="outSiteDhaka">Outside Dhaka City (ঢাকা সিটির বাহিরে):</label>
                        </div>
                        <div><span className="font-black">৳</span>150</div>
                    </div>
                </form>
            </div>
            <div className="py-3 flex justify-between items-center">
                <p className="text-xl font-semibold">Total</p>
                <p><span className="font-black">৳</span>{cartSubTotal + +shipping}</p>
            </div>
            <div className="py-3">
                <Link to={'/checkout'}><button className="primary-btn w-full">Proceed to checkout</button></Link>
            </div>
        </div>
    );
};

export default Carts_Details;