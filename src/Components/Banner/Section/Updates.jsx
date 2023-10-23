import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Updates = () => {
     const LoadedBrand= useLoaderData();
     const {_id,name,brandName,image,type,price,rating} = LoadedBrand;
     console.log(LoadedBrand)
    const handleUpdateProduct=event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        
        const brand={name,brandName,image,type,price,rating}
        console.log(brand)

        fetch(`https://brand-shop-assignment-server-3lbttrws9-chumki111.vercel.app/brandName/brand/${_id}`,{
           method:'PUT',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(brand)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })

       
    }
    return (
        <div>
             <div className="flex justify-center mt-7">
            <div className="card flex-shrink-0 w-full  max-w-5xl shadow-2xl">
            <div className="text-center mt-5  font-fontRancho">
            <h2 className="text-5xl text-[#001F3F]">
                Update Your Product
            </h2>
            <p className="text-2xl mt-5 px-12">
            Keep your product information up-to-date with our user-friendly update form. Add or modify details like name, brand, image, type, price, rating, and a brief description. Ensure your customers always have the most accurate information about your product.
        </p>
            </div>

            <form className="card-body font-fontRancho" onSubmit={handleUpdateProduct}>
                <div className="form-control text-3xl">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" defaultValue={name} className="input input-bordered" name="name" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                   
                    <select className="select select-bordered" defaultValue={brandName} name="brandName" required>
                        <option disabled selected>Chose a brand</option>
                        <option>Apple</option>
                        <option>Sony</option>
                        <option>Samsung</option>
                        <option>Google</option>
                        <option>Intel</option>
                        <option>Microsoft</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image" className="input input-bordered" name="image" defaultValue={image} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" placeholder="Type" className="input input-bordered" name="type" defaultValue={type} required />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" className="input input-bordered" name="price" defaultValue={price} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" className="input input-bordered" name="rating" defaultValue={rating} required />
                </div>
               
                 <div className="mt-3 "><button className="btn btn-block bg-[#FFD700]">Update Product</button></div>
            </form>

        </div>
        </div>
        </div>
    );
};

export default Updates;