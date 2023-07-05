import All_Products_Home from "../All_Products_Home/All_Products_Home";
import Banner from "../Banner/Banner";
import Best_Selling from "../Best_Selling/Best_Selling";
import New_Products from "../New_Products/New_Products";

const Home = () => {
    return (
        <>
            <Banner />
            <New_Products />
            <Best_Selling />
            <All_Products_Home />
        </>
    );
};

export default Home;