import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import Product_Card from "../../../Components/Product_Card/Product_Card";

const CategorizeShop = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const totalProduct = useLoaderData()
    const params = useParams()
    const totalPages = Math.ceil(totalProduct?.totalProduct / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
    useEffect(() => {
        if (totalProduct && params.category) {
            axios.get(`https://electro-ambition-server.vercel.app/products/${params?.category}?page=${currentPage}&&limit=${itemsPerPage}`)
                .then(result => setProducts(result.data))
        }
    }, [currentPage, itemsPerPage, totalProduct, params]);
    return (
        <section>
            <div className="container">
                <Section_Title firstWord={params.category} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around items-center">
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

export default CategorizeShop;