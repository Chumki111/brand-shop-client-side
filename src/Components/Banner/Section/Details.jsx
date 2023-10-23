import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Details = () => {
    const DetailsData= useLoaderData();
    const { image, name, someDescription, price, brandName,rating } =DetailsData

       const handleAddCart = () =>{
       const newData ={image, name, someDescription, price, brandName,rating}
        fetch('https://brand-shop-assignment-server-3lbttrws9-chumki111.vercel.app/cart',{
          method :'POST',
          headers :{
            'content-type' : 'application/json'
          },
          body :JSON.stringify(newData)
        })

        .then(res =>res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Your product added to cart successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })

       }

   
    return (
        <div className="flex justify-center items-center mt-10 mb-10 h-[70%]">
            <div className="relative flex w-full max-w-[52rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {brandName}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Price : {price}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {someDescription}
    </p>
    <a className="inline-block" href="#">
      <button
       onClick={handleAddCart}  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      ><AiOutlineShoppingCart className="text-xl"/>
        Add To Cart
       
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default Details;