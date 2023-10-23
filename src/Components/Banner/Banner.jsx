

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/DD9zTsQ/istockphoto-962404214-1024x1024.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome Our BrandShop</h1>
                        <p className="mb-5">where quality meets style. Discover a curated collection of premium brands and products designed to redefine your shopping experience. From fashion to electronics, home essentials to cutting-edge gadgets, we've handpicked the best for you.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;