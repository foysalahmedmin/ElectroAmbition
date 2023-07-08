import useProducts from "../../../../Hooks/useProducts";
import Top_Rated_Card from "./Top_Rated_Card";

const Top_Rated = () => {
    const [products] = useProducts('all', 'bestRating', 0, 4)
    return (
        <div>
            <h3 className="uppercase text-xl font-bold mb-3">Top Rated:</h3>
            <div className="grid gap-1">
                {
                    products.slice(0,4).map(product => <Top_Rated_Card key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Top_Rated;