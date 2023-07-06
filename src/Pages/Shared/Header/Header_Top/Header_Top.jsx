import Search from "../Search/Search";
import logo from "../../../../assets/Images/electroAmbition-Logo.svg"
import useAuth from "../../../../Hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Header_Top = () => {
    const { user } = useAuth()
    return (
        <div className="py-3 hidden md:block">
            <div className="container">
                <div className="w-full flex justify-between items-center">
                    <div className="w-1/3">
                        <img className="w-28" src={logo} alt="" />
                    </div>
                    <div className="w-1/3">
                        <Search />
                    </div>
                    <div className="w-1/3 flex justify-end items-center">
                        {
                            user ?
                                user.photoURL ?
                                    <img src={user?.photoURL} title={user?.displayName} className='w-11 h-11 rounded-full' alt="" />
                                    : <h3 title={user?.displayName}><FaUserCircle className='text-5xl' /></h3>
                                : <h3 title={'SignIn Please'}><FaUserCircle className='text-5xl' /></h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header_Top;