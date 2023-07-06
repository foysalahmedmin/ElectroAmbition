import Nav_Menu from "../Nav_Menu/Nav_Menu";
import { FaStream } from "react-icons/fa";
import logo from "../../../../assets/Images/electroAmbition-Logo.svg"
import Cart_Count from "../Cart_Count/Cart_Count";
import Theme from "../Theme/Theme";
import Search from "../Search/Search";

const Responsive_Header = () => {
    return (
        <>
            <header className="md:hidden bg-base-300 sticky top-0 w-full z-30 shadow-xl py-3">
                <nav className="container flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <label htmlFor="my-drawer" className="drawer-button hover:text-primary cursor-pointer"><FaStream className="text-3xl" /></label>
                        <img className="w-20" src={logo} alt="" />
                    </div>
                    <div className="flex items-center">
                        <Cart_Count />
                        <div className="divider px-0 mx-1 divider-horizontal"></div>
                        <Theme />
                    </div>
                </nav>
            </header>
            <div className="drawer md:hidden z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <div className="p-5 flex flex-col h-full bg-base-300 text-base-content">
                        <div>
                            <Search />
                        </div>
                        <div className="flex-1 grid items-center">
                            <Nav_Menu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Responsive_Header;