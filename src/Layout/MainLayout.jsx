import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div><Toaster/></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;