import React from 'react';
import founder from '../assetts/founder/image 8.png';
import logo from '../assetts/icons/path834.png'

const FounderMsg = () => {
    return (
        <div className='flex justify-center items-center lg:py-12 py-3'>

<div class="card lg:w-2/4 lg:p-10 p-3 bg-base-100 shadow-2xl">

<h1 style={{fontFamily:"cinzel", letterSpacing:"2px"}} className='text-xl text-center uppercase'>Founder's Message</h1>

  <figure class="px-10 pt-5">
    <img src={founder} alt="Shoes" class="rounded-full border border-black w-48" />
  </figure>


  <div class="card-body items-center text-center">
    <h2 class="card-title">Mr. Jayesh H. Pandya
</h2>

<div className='py-3 flex justify-center items-center gap-5'>
                <div id='divider' className='w-36'></div>
                <img className='w-9' src={logo} alt="" />
                <div id='divider' className='w-36'></div>
            </div>

    <p className='text-center italic w-2/3'>"When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home."</p>
    <div class="card-actions">
        <p style={{fontSize:"13px"}} className='text-justify'><small>
            
We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
        </small>
</p>
    </div>
  </div>
</div>


        </div>
    );
};

export default FounderMsg;