
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from './Star';



const BrandCard = ({ brand }) => {
    const { _id,image, name, someDescription, type, rating, price, brandName } = brand




    return (
      
        <div className='font-fontRancho'>
           <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={image} className='h-96 w-full'
      alt="ui/ux review check"
    />
    <div className="absolute  inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
   
  </div>
  <div className="p-6 ">
    <div className="flex items-center justify-between mb-3 ">
      <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
        {name}
      </h5>
     
      <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
      <Star rating={rating}></Star>
      </p>
    </div>
    <div className="flex items-center justify-between mb-3 ">
    <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
      Brand-Name : {brandName}
      </h5>
     
      <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
      Type : {type}
      </h5>
    </div>
    
      <p className=" font-sans text-xl font-medium antialiased leading-relaxed text-gray-700 flex flex-col ">
      Price : {price}
    </p>
     
   <div className='flex-grow'>
   <p className=" font-fontRaleway   text-justify text-base antialiased font-light leading-relaxed text-gray-700 flex flex-col ">
      {someDescription}
    </p>
   </div>
   
   
  </div>
  <div className=''>
  <div className="px-6   pt-3 ">
    <Link to={`/details/${_id}`}><button
      className=" btn btn-block bg-[#FFD700]"
      type="button"
      data-ripple-light="true"
    >
      Details
    </button></Link>
   
  </div>
  <div className="p-6">
  <Link to={`/updates/${_id}`}>

  <button
      className="btn btn-block bg-[#FFD700]"
      type="button"
      data-ripple-light="true"
    >
      Update
    </button>
  </Link>
  </div>
  </div>
</div>
        </div>
       
       
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
}
export default BrandCard;