import Cart_Count from "../Cart_Count/Cart_Count";
import Nav_Menu from "../Nav_Menu/Nav_Menu";
import Theme from "../Theme/Theme";

const Navigation = () => {
    return (
        <nav className="py-3 bg-base-content text-base-300 sticky top-0 hidden md:block">
            <div className="container">
                <div className="flex justify-between">
                    <Nav_Menu />
                    <div className="flex items-center">
                        <Cart_Count />
                        <div className="divider px-0 mx-1 divider-horizontal"></div>
                        <Theme />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;