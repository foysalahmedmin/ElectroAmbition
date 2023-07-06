import ActiveLink from "../../../../Components/ActiveLink/ActiveLink";
import { FaHome, FaMailBulk, } from "react-icons/fa";
import { FaCartShopping, FaShop } from "react-icons/fa6";

const Nav_Menu = () => {
    return (
        <ul className={` 
                        leading-9
                        md:flex 
                        justify-center 
                        items-center 
                        gap-5
                        `}>
            <ActiveLink to={"/"}>
                <li className='font-semibold flex items-center gap-1 hover:text-primary border-y-2 border-transparent shrink-0'><FaHome className="text-xl" /> HOME</li>
            </ActiveLink>
            <ActiveLink to={"/shop"}>
                <li className='font-semibold flex items-center gap-1 hover:text-primary border-y-2 border-transparent shrink-0'><FaShop className="text-xl" />SHOP(All Products)</li>
            </ActiveLink>

            <ActiveLink to={"/contact"}>
                <li className='font-semibold flex items-center gap-1 hover:text-primary border-y-2 border-transparent shrink-0'><FaMailBulk className="text-xl" />CONTACT</li>
            </ActiveLink>

            <ActiveLink to={"/cart"}>
                <li className='font-semibold flex items-center gap-1 hover:text-primary border-y-2 border-transparent shrink-0'><FaCartShopping className="text-xl" />CART</li>
            </ActiveLink>

            {/* {
                            user && (<li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/dashboard"}>DASHBOARD</ActiveLink></li>)
                        } */}
        </ul>
    );
};

export default Nav_Menu;