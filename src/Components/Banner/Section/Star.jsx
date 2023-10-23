
import PropTypes from 'prop-types';
import { FaStarHalfAlt,FaStar } from 'react-icons/fa';
import {AiOutlineStar } from 'react-icons/ai';

const Star = ({rating}) => {
    
 const ratingStar= Array.from({length : 5},(elme,index) =>{
        let number = index + 0.5;
        return(
            <span key={index}> 
            {
                rating >= index + 1 ? <FaStar className=' text-xl '/> : rating >= number ? <FaStarHalfAlt className=' text-xl '/> : <AiOutlineStar className=' text-xl '/>
            }
            
            </span>

        )
    })
    return (
        <div className='flex text-amber-400'>
            {ratingStar}
        </div>
    );
};
Star.propTypes ={
    rating: PropTypes.node
}
export default Star;