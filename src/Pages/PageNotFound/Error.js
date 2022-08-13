import React from 'react';
import img from '../../assetts/blogs.gif'

const Error = () => {
    return (
        <div className='min-h-screen mt-14'>
<h2 className="text-2xl text-amber-400 font-semibold my-5 lg:ml-44 uppercase">Coming Soon...</h2>
<div className='flex justify-center
            items-center'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Error;