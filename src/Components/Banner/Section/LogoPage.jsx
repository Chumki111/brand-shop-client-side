import { useEffect } from "react";
import { useLoaderData, useParams, } from "react-router-dom";
import BrandCard from "./brandCard";



const LogoPage = () => {
    const {name}= useParams();

    // const [brandCard,setBrandCard] = useState([])
   

    console.log(name)
    const loadedData = useLoaderData();
    console.log(loadedData)
    // useEffect(()=>{
        

    //     const findBrand = loadedData?.find(brand =>brand.brandName===name);
    // console.log(findBrand)
    // },[name,loadedData])
    return (
        <div>
            {
                loadedData?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default LogoPage;