import React from 'react';
import photo from '../assetts/sean-pollock-PhYq704ffdA-unsplash 1.png'
import logo from '../assetts/icons/path834.png';

const Mission = () => {
    return (
        <div className="bg-base-200 py-10">
      <h1
        style={{ fontFamily: "cinzel", letterSpacing: "2px" }}
        className="text-3xl uppercase text-center"
      >
        Mission
      </h1>

      <div className="py-8 flex justify-center items-center gap-5">
        <div id="divider" className="w-36"></div>
        <img src={logo} alt="" />
        <div id="divider" className="w-36"></div>
      </div>

        <div className="px-20 py-10 lg:grid grid-cols-2 justify-center items-center gap-10">
        
        <div>
                <img src={photo} alt="" />
            </div>


        <div>
        <div className="card card-body bg-base-300 shadow-xl">
                <h1 style={{color:"#474747"}} className="text-xl font-bold">Personalised</h1>
                <p className="text-justify">Our core idealogy is to provide personalised homes to meet the very specific needs of residents.
</p>
            </div>
        <div className=" px-4 py-2 rounded-xl bg-base-100 my-5 shadow-xl">
        <h1 style={{color:"#474747"}} className="text-xl font-bold">Committed</h1>
        </div>
        <div className=" px-4 py-2 rounded-xl bg-base-100 my-5 shadow-xl">
        <h1 style={{color:"#474747"}} className="text-xl font-bold">Quality & Service Oriented</h1>
        </div>
        <div className=" px-4 py-2 rounded-xl bg-base-100 my-5 shadow-xl">
        <h1 style={{color:"#474747"}} className="text-xl font-bold">Timely</h1>
        </div>

        </div>


            


        </div>

    </div>
    );
};

export default Mission;