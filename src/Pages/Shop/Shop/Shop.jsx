import { Outlet } from "react-router-dom";
import ShopBar from "../ShopBar/ShopBar/ShopBar";
import { AiTwotoneSliders } from "react-icons/ai";

const Shop = () => {
    return (
        <section className="">
            <div className="container flex">
                <div className="bg-base-300">
                    <ShopBar />
                </div>
                <div className="py-5 flex-1 md:py-10">
                    <label htmlFor="my-drawer-2" className="drawer-button md:hidden w-full flex gap-1 p-1 items-center border-b"><AiTwotoneSliders /> Show Filter</label>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Shop;