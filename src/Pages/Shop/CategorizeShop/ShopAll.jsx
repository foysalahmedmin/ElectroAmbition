import axios from "axios";
import { useEffect, useState } from "react";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import Product_Card from "../../../Components/Product_Card/Product_Card";
import { useLoaderData } from "react-router-dom";

const ShopAll = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sort, setSort] = useState('')
    const totalProduct = useLoaderData()
    const totalPages = Math.ceil(totalProduct?.totalProduct / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
    useEffect(() => {
        if (totalProduct) {
            axios.get(`http://localhost:5000/products/all?page=${currentPage}&&limit=${itemsPerPage}&&sort=${sort}`)
                .then(result => setProducts(result.data))
        }
    }, [currentPage, itemsPerPage, totalProduct, sort]);

    return (
        <section>
            <div className="container">
                <Section_Title firstWord={'All'} secondWord={'Products'} />
                <div className="mb-5 text-center flex justify-center"> 
                    <div className="tabs justify-center text-xl font-semibold">
                        <a onClick={() => setSort('latest')} className={`tab tab-bordered ${sort === 'latest' && 'tab-active'}`}>Latest</a>
                        <a onClick={() => setSort('bestSelling')} className={`tab tab-bordered ${sort === 'bestSelling' && 'tab-active'}`}>Popular</a>
                        <a onClick={() => setSort('bestRating')} className={`tab tab-bordered ${sort === 'bestRating' && 'tab-active'}`}>Best-Rated</a>
                        <a onClick={() => setSort('highPrice')} className={`tab tab-bordered ${sort === 'highPrice' && 'tab-active'}`}>Hight-Prised</a>
                        <a onClick={() => setSort('lowPrice')} className={`tab tab-bordered ${sort === 'lowPrice' && 'tab-active'}`}>Low-Prised</a>
                    </div>
                </div>
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
    )
};

export default ShopAll;