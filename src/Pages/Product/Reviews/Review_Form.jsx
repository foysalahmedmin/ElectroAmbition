
const Review_Form = ({ product_code }) => {
    return (
        <div>
            <form action="">
                <textarea className="textarea textarea-bordered w-full rounded-none mb-1" placeholder="Bio" required></textarea>
                <div className="flex gap-1">
                    <input type="text" placeholder="Name" className="input input-bordered w-full rounded-none" required/>
                    <input type="email" placeholder="Email" className="input input-bordered w-full rounded-none" required/>
                </div>
            </form>
        </div>
    );
};

export default Review_Form;