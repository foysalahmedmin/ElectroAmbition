import { NavLink } from "react-router-dom";

const ShopActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive? "text-primary border-b-2 border-primary pb-1" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ShopActiveLink;