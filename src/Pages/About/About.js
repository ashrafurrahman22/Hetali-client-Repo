import React from "react";
import logo from "../../assetts/icons/path834.png";
import FounderMsg from "../../Components/FounderMsg";
import GroupCompanies from "../../Components/GroupCompanies";
import Info from "../../Components/Info";
import Main from "../../Components/Main";
import Mission from "../../Components/Mission";
import Social from "../../Components/Social";
import Vision from "../../Components/Vision";

const About = () => {
  return (
    <div>
      <Main></Main>
      <Info></Info>
      <Vision></Vision>
        <Mission></Mission>
        <Social></Social>

      <div className="bg-base-200 py-10">
        <FounderMsg></FounderMsg>
        <div className="flex justify-center items-center">
          <div id="divider" className="w-80"></div>
          <img src={logo} alt="" className="w-10" />
          <div id="divider" className="w-80"></div>
        </div>
      </div>
      <GroupCompanies></GroupCompanies>
    </div>
  );
};

export default About;
