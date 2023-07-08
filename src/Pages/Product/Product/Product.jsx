import { useLoaderData } from "react-router-dom";
import Product_Details from "../Product_Details/Product_Details";
import Related_Products from "../Reated_Products/Related_Products";
import Reviews from "../Reviews/Reviews";

const Product = () => {
    const product = useLoaderData()
    const { _id, product_code, name, image, category, origin, brand_name, about, price, discounted_price, discount_amount, stock, sold, rating } = product;
    return (
        <>
            <Product_Details product={product} />
            <Reviews id={product?._id} product_code={product?.product_code} />
            <Related_Products id={product?._id} category={product?.category} />

        </>
    );
};

export default Product;