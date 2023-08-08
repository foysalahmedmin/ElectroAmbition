import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useRef, useState } from "react";

const Review_Form = ({ product_code, updated, setUpdated }) => {
    const ratingRef = useRef(null);
    const [rating, setRating] = useState(0);
    const reviewSend = (event) => {
        event.preventDefault()
        console.log(rating)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;
        axios.post(`https://electro-ambition-server.vercel.app/reviews/${product_code}`, {
            name,
            email,
            review,
            rating,
            product_code
        })
        .then(result => {
            if(result.data.insertedId){
                setUpdated(!updated)
                form.reset()
            }
        })
    }
    return (
        <div>
            <div className="w-full flex justify-center my-3">
                <Rating
                    style={{ maxWidth: 180 }}
                    ref={ratingRef}
                    value={rating}
                    onChange={setRating}
                />
            </div>
            <form onSubmit={reviewSend}>
                <textarea name="review" className="textarea textarea-bordered w-full rounded-none mb-1" placeholder="Bio" required></textarea>
                <div className="flex gap-1 mb-3">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full rounded-none" required />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full rounded-none" required />
                </div>
                <div>
                    <input className="primary-btn w-full" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Review_Form;