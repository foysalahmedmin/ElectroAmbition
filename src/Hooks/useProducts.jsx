import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = (category, sort, page, limit) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://electro-ambition-server.vercel.app/products/${category || 'all'}?page=${page && page}&&limit=${limit && limit}&&sort=${sort && sort}`)
        .then(result => setProducts(result.data))
    },[category, sort, page, limit])

    return [products]
};

export default useProducts;