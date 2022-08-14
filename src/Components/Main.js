import React from "react";
import logo from "../assetts/icons/path834.png";
import img1 from '../assetts/happy-parents-laughing-together-with-daughter 2.png'
import Card from "./Card";

const Main = () => {
  return (
    <div className="bg-base-300 py-10">
      <h1
        style={{ fontFamily: "cinzel", letterSpacing: "2px" }}
        className="text-3xl uppercase text-center"
      >
        About Us
      </h1>

      <div className="py-10 flex justify-center items-center gap-5">
        <div id="divider" className="w-36"></div>
        <img src={logo} alt="" />
        <div id="divider" className="w-36"></div>
      </div>

        <img src={img1} alt="" />

        <div  className="lg:w-5/12 mx-auto font-bold text-center py-10">
        <p>We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in. 
 
 </p>
        </div>

        <div className="py-10 flex justify-center items-center gap-5">
        <div id="divider" className="w-full"></div>
        <img src={logo} alt=""  className="w-32"/>
        <div id="divider" className="w-full"></div>
      </div>

      {/* card component */}
      <Card></Card>

    </div> 
  );
};

export default Main;
