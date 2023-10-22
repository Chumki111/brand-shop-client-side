import { useLoaderData } from "react-router-dom";
import ViewCart from "./ViewCart";


const MyCart = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {
                loadedData?.map(cart => <ViewCart key={cart._id} cart={cart}></ViewCart>)
            }
        </div>
    );
};

export default MyCart;