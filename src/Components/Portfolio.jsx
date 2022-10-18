import React from "react";
import image8 from "../asset/img/Portfolio/image8.png";
import image9 from "../asset/img/Portfolio/image9.png";
import image10 from "../asset/img/Portfolio/image10.png";
import image11 from "../asset/img/Portfolio/image11.png";
import image12 from "../asset/img/Portfolio/image12.png";
import image13 from "../asset/img/Portfolio/image13.png";
function Portfolio() {
  return (
    <div>
    <div className="mx-auto lg:max-w-[1140px] md:max-w-[600px] mt-10 pt-[60px]" id={"portfolio".toString()}>
      <h2 className="font-bold text-[45px] text-center">Our Portfolio</h2>
      <div className="mt-10">
        <ul className="portfolio-list flex md:justify-between  w-3/4 md:w-1/2 mx-auto gap-2">
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Website Design</a>
          </li>
          <li>
            <a href="/">Mobile App</a>
          </li>
          <li>
            <a href="/">Design Branding</a>
          </li>
          <li>
            <a href="/">UI/UX</a>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5 mx-auto">
          <img src={image8} alt="" className="mx-auto"/>
          <img src={image9} alt="" className="mx-auto"/>
          <img src={image10} alt="" className="mx-auto"/>
          <img src={image11} alt="" className="mx-auto"/>
          <img src={image12} alt="" className="mx-auto"/>
          <img src={image13} alt="" className="mx-auto"/>
        </div>
        
      </div>
      <div className="text-center mt-10">
            <button className="rounded-xl text-white font-bold bg-[#2EC4B6] px-8 py-2">View More</button>
        </div>
    </div>
    </div>
  );
}

export default Portfolio;
