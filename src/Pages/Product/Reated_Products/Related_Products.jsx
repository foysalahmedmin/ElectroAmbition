import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Product_Card from "../../../Components/Product_Card/Product_Card";
import Section_Title from "../../../Components/Section_Title/Section_Title";

const Related_Products = ({ id, category }) => {
    const [productShow, setProductShow] = useState([])
    const [products] = useProducts('all', 'latest', 0, 5)
    useEffect(()=>{
        if(products){
            const filter = products.filter(product => product._id !== id)
            setProductShow(filter)
        }
    }, [products, id])
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <Section_Title firstWord={'Related'} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-around items-center">
                        {
                            productShow.slice(0, 4).map(product => <Product_Card key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Related_Products;