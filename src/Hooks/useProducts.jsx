import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
    const { refetch, isLoading : productLoading, error, data : products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products`);
            return res.json();
        }
    })

    return [products, productLoading, refetch,  error ]
};

export default useProducts;