import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='lg:max-w-360 mx-auto'>
            <div className='text-center md:p-20 p-4'>
                        <img className='mx-auto w-40 md:w-1/3' src="../../../resource/assets/error-404.png" alt="" />
                        <h3 className='text-2xl md:text-4xl font-bold my-3'>OPPS!! Page NOT FOUND</h3>
                        <p className='text-gray-400 mt-2'>The Page you are requesting is not found on our system.  please try another apps</p>
                        <Link to={"/"}>
                            <button   className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white mt-3'>Back to Home</button>
                        </Link>
                        </div>
            
        </div>
    );
};

export default Error;