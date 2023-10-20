import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Logo from "../../Components/Banner/Section/Logo";


const Home = () => {
    const loadedData=useLoaderData()
    
    return (
        <div className="">
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    loadedData?.map(logo=><Logo key={logo.id} logo={logo}></Logo>)
                }
            </div>
        </div>
    );
};

export default Home;