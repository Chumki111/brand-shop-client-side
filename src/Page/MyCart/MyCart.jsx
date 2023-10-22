import { useLoaderData } from "react-router-dom";
import ViewCart from "./ViewCart";
import { useState } from "react";


const MyCart = () => {
    const loadedData = useLoaderData();
    const [carts,setCarts] = useState(loadedData)
    return (
        <div className="">
            {
                carts?.map(cart => <ViewCart key={cart._id} carts={carts} setCarts={setCarts} cart={cart}></ViewCart>)
            }
        </div>
    );
};

export default MyCart;