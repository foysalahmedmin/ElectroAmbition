import { useEffect, useState } from "react";
import Product_Card from "../../../Components/Product_Card/Product_Card";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import axios from "axios";

const Related_Products = ({ id, category }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            axios.get(`https://electro-ambition-server.vercel.app/products/${category}?sort=latest&&limit=5`)
                .then(result => {
                    const products = result.data
                    const filter = products?.filter(product => product._id !== id)
                    setProducts(filter)
                })
        }
    }, [category, id])
    return (
        <section className="py-10">
            <div className="container">
                <Section_Title firstWord={'Related'} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-around items-center">
                        {
                            products?.slice(0, 4).map(product => <Product_Card key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Related_Products;