import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Product_Card = ({ product }) => {
    const {addCartHandle} = useCart()
    const { _id, product_code, name, image, price, discounted_price, discount_amount } = product;
    return (

        <div className="p-3 border border-base-content group transition-all">
            <Link to={`/product/${_id}`}>
                <div className="w-full h-60 mb-3 relative overflow-hidden" >
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-all" src={image} alt="" />
                    {<p className="p-3 bg-secondary absolute top-0 left-0">-{discount_amount && ((discount_amount / price) * 100).toFixed(1)}%</p>}
                </div>
                <div className="mb-3">
                    <h1 className="font-bold text-xl group-hover:text-primary">
                        {name}
                    </h1>
                    <div className="flex gap-1 items-center group">
                        <p className={discount_amount ? 'font-semibold text-xs opacity-50 line-through' : 'font-semibold'}><span className="font-black ">৳</span><span>{price}</span></p>
                        {
                            discount_amount && <p className="text-primary font-semibold"><span className="font-black ">৳</span><span>{discounted_price}</span></p>
                        }
                    </div>
                </div>
            </Link>

            <button onClick={()=>addCartHandle(product_code)} className="primary-btn w-full">Add to cart</button>
        </div>
    );
};

export default Product_Card;