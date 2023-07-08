import { useEffect, useState } from "react";
import Product_Card from "../../../Components/Product_Card/Product_Card";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import axios from "axios";

const All_Products_Home = () => {
    const [products, setProducts] = useState([])
    const [totalProduct, setTotalProduct] = useState({})
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const totalPages = Math.ceil(totalProduct?.totalProduct / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
    useEffect(() => {
        axios.get(`https://electro-ambition-server.vercel.app/totalProducts/all`)
            .then(result => {
                setTotalProduct(result.data)
            })
    }, []);
    useEffect(() => {
        if (totalProduct) {
            axios.get(`https://electro-ambition-server.vercel.app/products/all?page=${currentPage}&&limit=${itemsPerPage}`)
                .then(result => setProducts(result.data))
        }
    }, [currentPage, itemsPerPage, totalProduct]);

    return (
        <section className="py-10">
            <div className="container">
                <Section_Title firstWord={'All'} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-around items-center">
                        {
                            products?.map(product => <Product_Card key={product._id} product={product} />)
                        }
                    </div>
                </div>

                <p>current Page: {currentPage} and items per page: {itemsPerPage}</p>
                <div className="flex items-center justify-center mt-5">
                    <div className="join">
                        {
                            pageNumbers?.length > 1 && (
                                pageNumbers?.map(number => <button
                                    key={number}
                                    className={`${currentPage === number && 'btn-active primary-btn'} join-item btn rounded-none`}
                                    onClick={() => setCurrentPage(number)}
                                >{number + 1}</button>)
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All_Products_Home;
