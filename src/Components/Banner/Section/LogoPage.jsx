
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Slider from "./Slider";
const LogoPage = () => {
    const loadedData = useLoaderData();
    if (!loadedData || loadedData.length === 0) {
        return <div className="text-4xl text-center py-20">No product available.</div>;
    }
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                loadedData?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
        </div>
    );
};

export default LogoPage;