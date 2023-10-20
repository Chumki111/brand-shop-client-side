import { useEffect } from "react";
import { useLoaderData, useParams, } from "react-router-dom";


const LogoPage = () => {
    const {name}= useParams();
   

    console.log(name)
    const loadedData = useLoaderData();
    console.log(loadedData)
    useEffect(()=>{
        

        const findBrand = loadedData?.find(brand =>brand.brandName===name);
        console.log(findBrand)
    },[name,loadedData])
    return (
        <div>
            
        </div>
    );
};

export default LogoPage;