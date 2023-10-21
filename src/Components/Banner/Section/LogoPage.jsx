
import { useLoaderData, useParams, } from "react-router-dom";
import BrandCard from "./brandCard";



const LogoPage = () => {
    const {name}= useParams();

   
   

    console.log(name)
    const loadedData = useLoaderData();
    console.log(loadedData)
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                loadedData?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
            
        </div>
        
    );
};

export default LogoPage;