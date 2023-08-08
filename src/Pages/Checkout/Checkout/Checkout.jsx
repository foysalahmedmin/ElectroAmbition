import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import { FaX } from "react-icons/fa6";

const Checkout = () => {
    const { cartSubTotal, saveCart } = useCart()
    const shippingDB = localStorage.getItem('electroAmbition-shipping')
    const paymentDB = localStorage.getItem('electroAmbition-payment')
    const [shipping, setShipping] = useState(shippingDB || 100)
    const [payment, setPayment] = useState(paymentDB || 'cashondelivery')
    const shippingHandle = (e) => {
        setShipping(+(e.target.value))
        localStorage.setItem('electroAmbition-shipping', +(e.target.value))
    }
    const paymentHandle = (e) => {
        setPayment(e.target.value)
        localStorage.setItem('electroAmbition-payment', e.target.value)
    }
    useEffect(() => {
        const shippingDB = localStorage.getItem('electroAmbition-shipping')
        if (!shippingDB) {
            localStorage.setItem('electroAmbition-shipping', 100)
        }
        if (!paymentDB) {
            localStorage.setItem('electroAmbition-payment', 'cashondelivery')
        }
    }, [shipping, paymentDB])
    return (
        <section className="py-10">
            <div className="container">
                <form className="grid md:grid-cols-2 gap-10" action="">
                    <div>
                        <div>
                            <h1 className="mb-10 text-3xl font-bold">Billing & Shipping</h1>
                            <div>
                                <label className="text-xl font-semibold mb-3" htmlFor="name">Your Name *</label>
                                <input className="input rounded-none w-full mb-5 border border-primary" type="text" name="name" id="name" placeholder="Enter Your Name" required />
                                <label className="text-xl font-semibold" htmlFor="tel">Your Phone Number *</label>
                                <input className="input rounded-none w-full mb-5 border border-primary" type="tel" pattern="[0-9]{11}" name="tel" id="tel" placeholder="Enter Your Number" required />
                                <label className="text-xl font-semibold" htmlFor="email">Your Email *</label>
                                <input className="input rounded-none w-full mb-5 border border-primary" type="email" name="email" id="email" placeholder="Enter Your Email" />
                                <label className="text-xl font-semibold" htmlFor="address">Your Full Address *</label>
                                <input className="input rounded-none w-full border border-primary" type="text" name="address" id="address" placeholder="Enter Your Address" required />
                            </div>
                        </div>
                        <div>
                            <h1 className="my-10 text-3xl font-bold">Additional Information</h1>
                            <div>
                                <label className="text-xl font-semibold" htmlFor="order-note">Order Notes (optional)</label>
                                <textarea className="textarea textarea-md rounded-none w-full border border-primary" type="text" name="order_note" id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="mb-10 text-3xl font-bold">Your Order</h1>
                            <div>
                                <div>
                                    {
                                        saveCart?.map(cart => <div key={cart._id} className="w-full flex gap-3 items-center mb-3">
                                            <div>
                                                <img className="w-10 h-10" src={cart.image} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{cart.name}</h3>
                                                <div className="flex gap-1 items-center justify-between w-full"><p className="flex gap-1 items-center"><span>{cart.cart_quantity}</span> <FaX className="text-xs" /> <span> <span className="font-black">৳</span>{cart.discounted_price || cart.price}</span></p> <span> <span className="font-black">৳</span>{cart.cart_total}</span></div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="py-3 flex justify-between items-center">
                                    <p className="text-xl font-semibold mb-3">Subtotal</p>
                                    <p><span className="font-black">৳</span>{cartSubTotal}</p>
                                </div>
                                <div className="py-3">
                                    <p className="text-xl font-semibold mb-3">Shipping</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className=" flex gap-2 items-center">
                                            <input onChange={shippingHandle} className="radio radio-warning" type="radio" name="shipping" id="dhaka" value={100} defaultChecked={shipping == 100} />
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
                                </div>
                                <div className="py-3 flex justify-between items-center">
                                    <p className="text-xl font-semibold">Total</p>
                                    <p><span className="font-black">৳</span>{cartSubTotal + +shipping}</p>
                                </div>
                            </div>
                            <div>
                                <div className="py-3">
                                    <p className="text-xl font-semibold mb-3">Payment</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className=" flex gap-2 items-center">
                                            <input onChange={paymentHandle} className="radio radio-warning" type="radio" name="payment" id="dhaka" value={'cashondelivery'} defaultChecked={payment == 'cashondelivery'} />
                                            <label htmlFor="dhaka">Cash on delivery</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className=" flex gap-2 items-center">
                                            <input onChange={paymentHandle} className="radio radio-warning" type="radio" name="payment" id="outSiteDhaka" value={'bkashpayment'} defaultChecked={payment == 'bkashpayment'} />
                                            <label htmlFor="outSiteDhaka">bKash Payment Gateway</label>
                                        </div>
                                        <div><img className="h-10" src={'https://i.ibb.co/Xk13mBr/bkash-logo.png'} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className="primary-btn w-full" type="submit" value="Place Order" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;