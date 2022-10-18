import React from "react";
import disc from "../asset/img/disc.png";
import forbes from "../asset/img/logobrand/forbe.png";
import netflix from "../asset/img/logobrand/netflix.png";
import amazon from "../asset/img/logobrand/amazon.png";
import sej from "../asset/img/logobrand/sej-logo.png";
import entrepreneur from "../asset/img/logobrand/entrepreneur.png";
import pen from "../asset/img/Description/pen.png";
import search from "../asset/img/Description/search.png";
function Packake() {
  return (
    <div id="package" className="mb-5">
      <div className="pt-[60px]">
      <div className="mt-[20px]">
        <h1 className="font-bold mx-auto max-w-[300px] md:max-w-[700px] text-center text-[45px]">
          Our work features on
        </h1>
        <div className="brandinfo mx-auto lg:max-w-[1140px] flex flex-row gap-9 justify-center mb-24 rounded mt-8">
          <img src={forbes} alt="true" />
          <img src={netflix} alt="nfl" />
          <img src={amazon} alt="amz" />
          <img src={sej} alt="sej" />
          <img src={entrepreneur} alt="etran" />
        </div>
      </div>
      <div className="desc-package flex md:justify-between mx-auto max-w-[1140px] gap-x-1">
        <div className="description-left items-center">
          <h1 className="tracking-wide mb-[38px] font-medium text-3xl mt-14">
            HOW PAGETRAFFIC CREATES <br />
            HYPER BUSINESS GROWTH
          </h1>
          <p className="text-lg max-w-[464px]">
            PageTraffic offers top-notch SEO and digital marketing solutions to
            help you rank high on search results, connect with.
          </p>
          <ul>
            <li className="flex items-center gap-3 my-2">
              <img src={disc} alt=""></img>
              <p className="text-lg">
                PageTraffic offers top-notch SEO and digital{" "}
              </p>
            </li>
            <li className="flex items-center gap-3 my-2">
              <img src={disc} alt=""></img>
              <p className="text-lg">
                PageTraffic offers top-notch SEO and digital{" "}
              </p>
            </li>
            <li className="flex items-center gap-3 my-2">
              <img src={disc} alt=""></img>
              <p className="text-lg">
                PageTraffic offers top-notch SEO and digital{" "}
              </p>
            </li>
            <li className="flex items-center gap-3 my-2">
              <img src={disc} alt=""></img>
              <p className="text-lg">
                PageTraffic offers top-notch SEO and digital{" "}
              </p>
            </li>
            <li className="flex items-center gap-3 my-2">
              <img src={disc} alt=""></img>
              <p className="text-lg">
                PageTraffic offers top-notch SEO and digital{" "}
              </p>
            </li>
          </ul>

          <div className="number flex justify-between max-w-[340px] my-8">
            <div className="number-detail">
              <h2 className="text-red-500 font-bold text-3xl">1.9K</h2>
              <p>Total Audience</p>
            </div>
            <div className="number-detail">
              <h2 className="text-sky-500 font-bold text-3xl">5.7K</h2>
              <p>Complete Project</p>
            </div>
          </div>

          <div>
            <button className="px-5 py-1 text-white rounded bg-teal-500">
              Explore Now
            </button>
          </div>
        </div>
        <div className="description-right flex flex-row gap-5">
          <div className="block-left flex flex-col gap-5">
            <div className="rounded-xl desc-pen">
              <div className="p-4">
                <div>
                  <img src={pen} alt="" />
                </div>
                <br />
                <p className="text-[26px]">I want leads</p>
                <p className="text-lg">
                  Looking to get higher ROI <br />
                  by improving website.
                </p>
                <p className="text-red-500">View more</p>
              </div>
            </div>
            <div className="rounded-xl desc-search">
              <div className="p-4">
                <div>
                  <img
                    src={search}
                    alt=""
                    className="border rounded-xl bg-teal-100 p-[24px]"
                  />
                </div>
                <br />
                <p className="text-[26px]">I want leads</p>
                <p className="text-lg">
                  Looking to get higher ROI <br /> by improving website.
                </p>
                <p className="text-teal-600">View more</p>
              </div>
            </div>
          </div>

          <div className="block-right flex flex-col gap-5 mt-10">
            <div className="rounded-xl desc-search">
              <div className="p-4">
                <div>
                  <img
                    src={search}
                    alt=""
                    className="border rounded-xl bg-teal-100 p-[24px]"
                  />
                </div>
                <br />
                <p className="text-[26px]">I want leads</p>
                <p className="text-lg">
                  Looking to get higher ROI <br /> by improving website.
                </p>
                <p className="text-teal-600">View more</p>
              </div>
            </div>
            <div className="rounded-xl desc-pen">
              <div className="p-4">
                <div>
                  <img src={pen} alt="" />
                </div>
                <br />
                <p className="text-[26px]">I want leads</p>
                <p className="text-lg">
                  Looking to get higher ROI <br />
                  by improving website.
                </p>
                <p className="text-red-500">View more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Packake;
