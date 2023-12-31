
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Star from '../../Components/Banner/Section/Star';
import {AiOutlineDelete } from 'react-icons/ai';
const ViewCart = ({ cart ,carts,setCarts}) => {
  const { _id, image, name, price, brandName ,rating} = cart;

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://brand-shop-assignment-server-3lbttrws9-chumki111.vercel.app/cart/${_id}`,{
         method :'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
              const remaining = carts?.filter(cart => cart._id !== _id);
              setCarts(remaining)
            }
          })
      }
    })
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-10 h-[70%]">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img
              src={image}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 text-left">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
              {brandName}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Price : {price}
            </p>
            <Star rating={rating}></Star>

            <a className="inline-block mt-10" href="#">
              <button
                onClick={() => handleDelete(_id)}
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <AiOutlineDelete className='text-xl'/>
                Delete

               
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewCart.propTypes = {
  cart: PropTypes.object
}
export default ViewCart;