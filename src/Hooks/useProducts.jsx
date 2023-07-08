// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

// const useProducts = (category, sort, page, limit) => {
//     const { refetch, isLoading : productLoading, error, data : products = [] } = useQuery({
//         queryKey: ['products'],
//         queryFn: async() => {
//             const res = await fetch(`http://localhost:5000/products/${category || 'all'}?page=${page && page}&&limit=${limit && limit}&&sort=${sort && sort}`);
//             return res.json();
//         }
//     })

//     return [products, productLoading, refetch,  error ]
// };
const useProducts = (category, sort, page, limit) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${category || 'all'}?page=${page && page}&&limit=${limit && limit}&&sort=${sort && sort}`)
        .then(result => setProducts(result.data))
    },[category, sort, page, limit])

    return [products]
};

export default useProducts;