import { useEffect } from "react";
import Product_Card from "../../../Components/Product_Card/Product_Card";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import useProducts from "../../../Hooks/useProducts";
import axios from "axios";

const All_Products_Home = () => {
    const [products] = useProducts('all')
    console.log(products)
    useEffect(()=>{
        axios.get()
    },[])
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <Section_Title firstWord={'All'} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-around items-center">
                        {
                            products.map(product => <Product_Card key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All_Products_Home;