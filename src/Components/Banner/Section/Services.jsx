import {ImLeaf} from 'react-icons/Im';
import {BiFastForward} from 'react-icons/Bi';
import {FaHeadphones} from 'react-icons/Fa';

const Services = () => {
    return (
        <div className='shadow-lg p-5 mt-8'>
            <h1 className="text-center text-7xl mt-10 font-fontRancho">Our Services</h1>
            <p className="  text-center mb-4">Our brand services encompass a holistic approach to brand development. <br /> We craft a solid brand strategy, defining your mission and <br />  Our experts design a unique visual identity, including logos and key visuals. <br /> We ensure your messaging resonates with your audience, creating a strong brand voice. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                <div className='text-center'>
                    <ImLeaf className='text-5xl ml-44 md:ml-36 lg:ml-44'></ImLeaf>
                    <p className='font-bold text-5xl -mt-10'>____</p>
                    <h1 className='font-fontRancho text-4xl py-3'>Super Fast</h1>
                    <p className='mb-5'>It embraces clean, uncluttered spaces, favoring simplicity over excess. With a focus on user experience, modern design seamlessly integrates form and function, creating environments that are both visually striking and highly functional.</p>
                </div>
                <div className='text-center'>
                    <BiFastForward className='text-5xl ml-40 md:ml-36 lg:ml-40'></BiFastForward>
                    <p className='font-bold text-5xl -mt-12'>____</p>
                    <h1 className='font-fontRancho text-4xl py-3 capitalize'>Modern Design</h1>
                    <p>It embraces clean, uncluttered spaces, favoring simplicity over excess. With a focus on user experience, modern design seamlessly integrates form and function, creating environments that are both visually striking and highly functional.</p>
                </div>
                <div className='text-center'>
                    <FaHeadphones className='text-5xl ml-40 md:ml-36 lg:ml-40'/>
                    <p className='font-bold text-5xl -mt-12'>____</p>
                    <h1 className='font-fontRancho text-4xl py-3 capitalize'>Friendly Support</h1>
                    <p>Our support service is designed with your success in mind. We believe that exceptional support is the cornerstone of a great customer experience. Our team is highly trained and dedicated to providing timely and effective solutions to any challenges you may encounter. </p>
                </div>
            </div>
        </div>
    );
};

export default Services;