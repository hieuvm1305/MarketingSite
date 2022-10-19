import React from "react";
import facebook from "../asset/img/aboutus/facebook.png";
import ins from "../asset/img/aboutus/Ins.png";
import twitter from "../asset/img/aboutus/Twitter.png";
import youtube from "../asset/img/aboutus/Youtube.png";
import per1 from "../asset/img/aboutus/per1.png";
import per2 from "../asset/img/aboutus/per2.png";
import dot from "../asset/img/aboutus/dot.png";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="mt-14 mx-auto max-w-[350px] lg:max-w-[1140px] md:max-w-[700px] pt-5" id={1 && "aboutus"}>
        <div className="">
          <h2 className="text-[#E71D36] text-[65px] font-bold">DeMo.</h2>
        </div>
        <div className="aboutus-info flex md:flex-wrap lg:flex-row  md:justify-between gap-[30px] md:gap-[50px]">
          <div className="max-w-[350px]">
            <p className="pr-10">
              FindBestSEO has ranked PageTraffic among the top 10 SEO companies
              for 2020.
            </p>
            <br />
            <div className="flex flex-row md:max-w-[400px] justify-between">
              <img src={facebook} alt="" />
              <img src={ins} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-[#2EC4B6] text-2xl font-semibold">COMPANY</h3>
            <br />
            <div className="flex flex-col gap-y-3">
              <p>About</p>
              <p>Service</p>
              <p>Press</p>
              <p>Resource</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <h3 className="text-[#2EC4B6] text-2xl font-semibold flex justify-start">
              LASTEST NEWS
            </h3>
            <br />
            <div className="flex flex-col md:gap-y-5">
              <div className="flex flex-row lg:justify-between gap-3">
                <div className="block">
                  <img
                    src={per1}
                    alt=""
                    className="w-[100px] h-[100px] block"
                  />
                </div>
                <div className="flex flex-col gap-y-1 my-auto">
                  <p className="text-[#2EC4B6] font-medium text-[18px] leading-5">
                    Per Click Management
                  </p>
                  <p className="font-normal text-xs max-w-[177px]">
                    PageTraffic is a premier Search Engine Marketing (SEM).
                  </p>
                  <div className="flex flex-row gap-x-2 items-center">
                    <img src={dot} alt="" />
                    <p className="text-[#E71D36] text-[10px] font-normal">
                      15 April 2021
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row lg:justify-between gap-3">
                <div className="block">
                  <img src={per2} alt="" className="w-[100px] h-[100px]" />
                </div>
                <div className="flex flex-col gap-y-1 my-auto">
                  <p className="text-[#2EC4B6] font-medium text-[18px] leading-5">
                    Per Click Management
                  </p>
                  <p className="font-normal text-xs max-w-[177px]">
                    PageTraffic is a premier Search Engine Marketing (SEM).
                  </p>
                  <div className="flex flex-row gap-x-2 items-center">
                    <img src={dot} alt="" />
                    <p className="text-[#E71D36] text-[10px] font-normal">
                      15 April 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col md:flex-row md:justify-between text-[18px] leading-5 py-10 gap-2">
          <p>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</p>
          <p>
            <span className="text-[#2EC4B6]">Privacy</span> | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
