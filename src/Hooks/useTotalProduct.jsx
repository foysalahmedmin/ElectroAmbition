import { useQuery } from "@tanstack/react-query";

const useTotalProduct = (category) => {
    const { refetch, isLoading : productCountLoading, error, data : productsCount = {} } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`https://electro-ambition-server.vercel.app/totalProducts/${category}`)
            return res.json();
        }
    })

    return [productsCount, productCountLoading, refetch,  error ]
};

export default useTotalProduct;