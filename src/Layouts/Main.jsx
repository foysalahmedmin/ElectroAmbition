import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer/Footer";

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Main;