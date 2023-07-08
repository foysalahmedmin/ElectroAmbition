import Category from "../Category/Category";
import Top_Rated from "../Top_Rated/Top_Rated";

const ShopBar = () => {
    return (
        <div className="drawer md:drawer-open z-50 md:z-auto md:full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side overflow-y-scroll md:h-auto">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="p-5 md:py-10 w-60 grid gap-5 items-center overflow-y-scroll md:overflow-auto h-full bg-base-300 md:bg-transparent text-base-content">
                    <Category />
                    <p className="bg-base-content h-[1px] w-full"></p>
                    <Top_Rated />
                </div>

            </div>
        </div>
    );
};

export default ShopBar;