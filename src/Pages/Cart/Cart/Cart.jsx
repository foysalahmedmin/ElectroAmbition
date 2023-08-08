import Cart_Items from "../Cart_Items/Cart_Items";
import Carts_Details from "../Carts_Details/Carts_Details";

const Cart = () => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-5">
                    <Cart_Items />
                    <Carts_Details />
                </div>
            </div>
        </section>
    );
};

export default Cart;