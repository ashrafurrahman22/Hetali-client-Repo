import React from "react";
import logo from "../assetts/icons/path834.png";
import children from '../assetts/sean-pollock-PhYq704ffdA-unsplash 1 (1).png'

const Social = () => {
  return (
    <div className="bg-base-300 py-10">
      <h1
        style={{ fontFamily: "cinzel", letterSpacing: "2px" }}
        className="text-3xl uppercase text-center"
      >
        Corporate Social Responsibility
      </h1>

      <div className="py-8 flex justify-center items-center gap-5">
        <div id="divider" className="w-36"></div>
        <img src={logo} alt="" />
        <div id="divider" className="w-36"></div>
      </div>

        <div className="px-20 py-10 grid grid-cols-2 justify-center items-center gap-10">

        <div>
        <div className="card card-body bg-base-100 shadow-xl">
                <h1 style={{color:"#474747"}} className="text-xl font-bold">Education for the under-privileged</h1>
                <p className="text-justify">We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
</p>
            </div>
        <div className=" px-4 py-2 rounded-xl bg-base-100 my-5 shadow-xl">
        <h1 style={{color:"#474747"}} className="text-xl font-bold">Support for Rural Farmers</h1>
        </div>
        <div className=" px-4 py-2 rounded-xl bg-base-100 my-5 shadow-xl">
        <h1 style={{color:"#474747"}} className="text-xl font-bold">Spiritual</h1>
        </div>

        </div>


            <div>
                <img src={children} alt="" />
            </div>


        </div>

    </div>
  );
};

export default Social;
