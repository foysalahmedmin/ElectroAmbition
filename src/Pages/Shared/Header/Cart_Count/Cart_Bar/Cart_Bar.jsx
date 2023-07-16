import { Link } from "react-router-dom";
import useCart from "../../../../../Hooks/useCart";
import { FaX } from "react-icons/fa6";

const Cart_Bar = () => {
    const { saveCart, cartSubTotal, removeCartHandle } = useCart()
    console.log(saveCart)
    return (
        <div className="drawer drawer-end z-30">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="p-5 py-10 w-80 h-full flex flex-col bg-base-200 text-base-content">
                    <div>
                        <h3 className="text-xl font-bold mb-5">Shopping Carts:</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            {
                                saveCart?.map(cart => <div key={cart._id} className="w-full flex gap-3 items-center mb-3">
                                    <div>
                                        <FaX onClick={() => removeCartHandle(cart.product_code) } className="hover:text-primary cursor-pointer" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{cart.name}</h3>
                                        <div className="flex gap-1 items-center justify-between w-full"><p className="flex gap-1 items-center"><span>{cart.cart_quantity}</span> <FaX className="text-xs" /> <span> <span className="font-black">৳</span>{cart.discounted_price || cart.price}</span></p> <span> <span className="font-black">৳</span>{cart.cart_total}</span></div>
                                    </div>
                                </div>)
                            }
                        </div>
                        <div>
                            <div className="mb-3 flex justify-between">
                                <span className="font-bold">Sub-Total:</span> <span><span className="font-black">৳</span>{cartSubTotal}</span>
                            </div>
                            <div>
                                <Link to={'/cart'} ><button className="primary-btn-outline w-full mb-1">View Cart</button></Link>
                                <button className="primary-btn w-full">Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart_Bar;