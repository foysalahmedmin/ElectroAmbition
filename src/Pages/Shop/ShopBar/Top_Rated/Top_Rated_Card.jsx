import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'

const Top_Rated_Card = ({ product }) => {
    const { _id, product_code, name, image, price, discounted_price, discount_amount, rating } = product;
    console.log(rating)
    return (
        <Link to={`/product/${_id}`}>
            <div className="p-1 border border-base-content group transition-all flex flex-row-reverse justify-between items-center">
                <div className="w-10 relative overflow-hidden" >
                    <img className="w-full object-cover group-hover:scale-110 transition-all" src={image} alt="" />
                </div>
                <div>
                    <h1 className="font-bold group-hover:text-primary">
                        {name}
                    </h1>
                    <div className="flex gap-1 items-center group">
                        <p className={discount_amount ? 'font-semibold text-xs opacity-50 line-through' : 'font-semibold'}><span className="font-black ">৳</span><span>{price}</span></p>
                        {
                            discount_amount && <p className="text-primary font-semibold"><span className="font-black ">৳</span><span>{discounted_price}</span></p>
                        }
                    </div>
                    <div>
                        <Rating
                            style={{ maxWidth: 70 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Top_Rated_Card;