import { useQuery } from "@tanstack/react-query";

const useTotalProduct = (category) => {
    const { refetch, isLoading : productCountLoading, error, data : productsCount = {} } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/totalProducts/${category}`)
            return res.json();
        }
    })

    return [productsCount, productCountLoading, refetch,  error ]
};

export default useTotalProduct;