
import Swal from 'sweetalert2'
const AddProduct = () => {

    const handleAddProduct=event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const someDescription = form.someDescription.value;
        const NewBrand={name,brandName,image,type,price,rating,someDescription}
        console.log(NewBrand)

        fetch('http://localhost:5000/brandName',{
           method:'POST',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(NewBrand)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="flex justify-center mt-7">
            <div className="card flex-shrink-0 w-full  max-w-5xl shadow-2xl">
            <div className="text-center mt-5  font-fontRancho">
            <h2 className="text-5xl text-[#001F3F]">
                Add Your Product
            </h2>
            <p className="text-2xl mt-5 px-12">
            This is where you can provide a description of your product. You can talk about its features, benefits, and anything else you think potential customers might want to know.
        </p>
            </div>

            <form className="card-body font-fontRancho" onSubmit={handleAddProduct}>
                <div className="form-control text-3xl">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                   
                    <select className="select select-bordered" defaultValue="Chose a brand" name="brandName" required>
                        <option selected>Chose a brand</option>
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
                    <input type="text" placeholder="Image" className="input input-bordered" name="image" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" placeholder="Image" className="input input-bordered" name="type" required />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" className="input input-bordered" name="price" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" className="input input-bordered" name="rating" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Some Description</span>
                    </label>
                   
                    <textarea className="textarea textarea-bordered" placeholder="Description" name="someDescription"></textarea>
                </div>
                 <div className="mt-3 "><button className="btn btn-block bg-[#FFD700]">Add Product</button></div>
            </form>

        </div>
        </div>

    );
};

export default AddProduct;