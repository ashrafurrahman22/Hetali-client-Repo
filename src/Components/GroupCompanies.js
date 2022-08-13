import React from 'react';
import img1 from '../assetts/image.png';
import img2 from '../assetts/image 5.png';
import img3 from '../assetts/image 9.png';
import logo from '../assetts/icons/path834.png'
import '../Styles/GroupCompanies.css'

const GroupCompanies = () => {
    return (
        <div className='px-20 py-10'>

            <h1 style={{fontFamily:"cinzel", letterSpacing:"2px"}} className='text-3xl uppercase text-center'>Group Companies</h1>

            <div className='py-8 flex justify-center items-center gap-5'>
                <div id='divider' className='w-36'></div>
                <img src={logo} alt="" />
                <div id='divider' className='w-36'></div>
            </div>

            <div className='lg:flex justify-center items-center gap-10'>
            <div>
                <img src={img1} alt="" />
                <h1 className='font-bold text-xl text-center py-3'>Agriculture</h1>
            </div>
            <div>
                <img src={img2} alt="" />
                <h1 className='font-bold text-xl text-center py-3'>Fuel</h1>
            </div>
            <div>
                <img src={img3} alt="" />
                <h1 className='font-bold text-xl text-center py-3'>Foods</h1>
            </div>
            </div>
        </div>
    );
};

export default GroupCompanies;