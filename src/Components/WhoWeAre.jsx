import React from "react";
import chervon_left from "../asset/img/whoweare/chervon_left.png";
import chervon_right from "../asset/img/whoweare/chervon_right.png";
import jennie from "../asset/img/whoweare/jennie.png";
import jane from "../asset/img/whoweare/jane.png";
import cody from "../asset/img/whoweare/Cody.png";
import darell from "../asset/img/whoweare/Darell.png";
import rate2 from "../asset/img/whoweare/rate2.png";
import rate1 from "../asset/img/whoweare/rate1.png";
import rate3 from "../asset/img/whoweare/rate3.png";

function WhoWeAre() {
  const addnew = () => {
    console.log("first");
  }
  return (
    <div className="">
      <div className="whoweare mx-auto w-5/6 pt-[80px]" id={1 && "whoweare"}>
        <div className="whoweare-title flex justify-between">
          <p className="text-[26px] font-medium text-red-special">Case Study</p>
          <div className="flex flex-row gap-2" onClick={() => addnew()}>
            <img src={chervon_left} alt="" className="w-[40px] h-[40px]" />
            <img src={chervon_right} alt="" className="w-[40px] h-[40px]" />
          </div>
        </div>
        <div className="whoweare-content flex lg:flex-row flex-col justify-between gap-2 items-center">
          <div className=" md:mb-5 flex flex-col gap-5">
            <h2 className="font-bold leading-tight text-3xl md:text-[45px] text-center lg:text-left">
              OUR CLIENT GETS RESULTS
            </h2>
            <p className="text-lg text-center lg:text-left">
              PageTraffic offers top-notch SEO and digital marketing solutions.
            </p>
          </div>
          <div className="img-whoweare flex md:flex-row md:justify-between gap-5 mx-auto justify-center items-stretch">
            <div className="relative sm:w-1/4">
              <img
                src={jennie}
                alt=""
                className="w-full h-full rounded-xl"
              />
              <div className="absolute flex items-end justify-between left-4 right-4 bottom-4 ">
                <p className="text-white text-xs">Jenny Willson</p>
                <img src={rate2} alt="" />
              </div>
            </div>
            <div className="relative sm:w-1/4">
              <img src={jane} alt="" className="h-full w-full rounded-xl" />
              <div className="absolute flex items-end justify-between left-4 right-4 bottom-4">
                <p className="text-white text-xs">Jane Cooper</p>
                <img src={rate1} alt="" />
              </div>
            </div>
            <div className="relative sm:w-1/4">
              <img src={cody} alt="" className="w-full h-full rounded-xl" />
              <div className="absolute flex items-center justify-between left-4 right-4 bottom-4 ">
                <p className="text-white text-xs">Cody Fisher</p>
                <img src={rate3} alt="" />
              </div>
            </div>
            <div className="relative sm:w-1/4">
              <img src={darell} alt="" className="h-full w-full rounded-xl" />
              <div className="absolute flex items-center justify-between left-4 right-4 bottom-4">
                <p className="text-white text-xs">Darrell Steward</p>
                <img src={rate1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
