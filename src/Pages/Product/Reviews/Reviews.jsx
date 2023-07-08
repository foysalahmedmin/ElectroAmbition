import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Reviews = ({ id, product_code }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get(`https://electro-ambition-server.vercel.app/reviews/${product_code}`)
            .then(result => setReviews(result.data))
    }, [product_code])
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Reviews <span className="text-xl text-primary font-semibold">({reviews.length})</span>
                    </div>
                    <div className="collapse-content">
                        <div>
                            {
                                reviews?.map(review => <div className="mb-5" key={review._id}>
                                    <div className="flex gap-3">
                                        {review.image ? <img className="w-10 h-10 rounded-full" src={review.image} alt="" /> : <FaUserCircle className="text-4xl" />}
                                        <div>
                                            <h3 className="font-semibold mb-1">{review.name}</h3>
                                            <p className="mb-1">
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={review.rating}
                                                    readOnly
                                                />
                                            </p>
                                            <p>
                                                {review.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;