
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Logo = ({ logo }) => {
    const { name, image_url } = logo;
    return (
        
       
        <div>
            
          
          <Link to={`/brand/${name}`}>
           <div className="card bg-base-100 shadow-xl image-full">
                <figure className="h-80 w-full"><img src={image_url} alt="Shoes" className="" /></figure>
                <div className="card-body font-fontRancho">
                    
                    <h1 className="text-center text-5xl">{name}</h1>
                    
                </div>
            </div>
           </Link>
          
        </div>
        
    );
};
Logo.propTypes={
    logo:PropTypes.object
}
export default Logo;