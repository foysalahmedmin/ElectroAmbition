import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Product_Details = ({ product }) => {
    const { _id, product_code, name, image, category, origin, brand_name, about, price, discounted_price, discount_amount, stock, sold, rating } = product;
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className="transition-all grid gap-5 md:grid-cols-2 items-center">
                    <div className="w-full p-3 border border-base-content relative overflow-hidden" >
                        <img className="w-full h-full object-cover hover:scale-110 transition-all" src={image} alt="" />
                        {<p className="p-3 bg-secondary absolute top-0 left-0">-{discount_amount && ((discount_amount / price) * 100).toFixed(1)}%</p>}
                    </div>
                    <div className="p-3">
                        <div className="group mb-5">
                            <h1 className="font-bold text-3xl md:5xl group-hover:text-primary">
                                {name}
                            </h1>
                            <p className="mb-3">{category}</p>
                            <p className="font-semibold">Brand: {brand_name}</p>
                            <p className="font-semibold">Made In {origin}</p>
                            <p className="mb-3">
                                {about}
                            </p>
                            <p className="font-semibold">{stock} Product Available Only</p>
                            <div className="flex gap-1 items-center group">
                                <p className={discount_amount ? 'font-semibold text-xs opacity-50 line-through' : 'font-semibold'}><span className="font-black ">৳</span><span>{price}</span></p>
                                {
                                    discount_amount && <p className="text-primary font-semibold"><span className="font-black ">৳</span><span>{discounted_price}</span></p>
                                }
                            </div>
                            <div>
                                <Rating
                                    style={{ maxWidth: 170 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-1 mb-1">
                                <input className="input border border-primary rounded-none" defaultValue={1} type="number" min={1} max={stock} name="quantity" id="quantity" />
                                <button className="primary-btn border border-primary flex-1">Add to cart</button>
                            </div>
                            <button className="secondary-btn border border-secondary w-full">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product_Details;