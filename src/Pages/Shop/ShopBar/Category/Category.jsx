import { useEffect, useState } from "react";
import ShopActiveLink from "../../../../Components/ShopActiveLink/ShopActiveLink";
import axios from "axios";

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://electro-ambition-server.vercel.app/categories')
            .then(result => setCategories(result.data.categories))
    }, [])
    return (
        <div>
            <h3 className="uppercase text-xl font-bold mb-3">CATEGORIES:</h3>
            <ul className={`leading-9`}>
                {
                    categories.map((category, i) => <ShopActiveLink key={i} to={`/shop/${category}`}>
                        <li className='font-semibold uppercase flex items-center gap-1 hover:text-primary border-y-2 border-transparent shrink-0'>{category}</li>
                    </ShopActiveLink>)
                }

            </ul>
        </div>
    );
};

export default Category;