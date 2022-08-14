import React from 'react';
import star from '../assetts/icons/Vector (4).png'
import star2 from '../assetts/icons/Vector (5).png'
import star3 from '../assetts/icons/Vector (6).png'
import star4 from '../assetts/icons/Vector.png'

const Card = () => {
    return (
        <div className='flex justify-center items-center'>
            
            <div className='lg:grid grid-cols-2 gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={star4} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-justify">
    <p>Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours. </p>
  </div>
</div>

            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={star} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <p>The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents.</p>
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={star2} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-justify">
    <p>They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.
</p>
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={star3} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <p>Hetali Group lives by the ethos of building homes to live and not houses to stay in.</p>
  </div>
</div>
            </div>

        </div>
    );
};

export default Card;