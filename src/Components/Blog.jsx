import React from "react";
import chervon_left from "../asset/img/chervonleft.png";
import chervon_right from "../asset/img/chervon_right.png";
import designTips from "../asset/img/blog/DesignTips.png";
import arrowRed from "../asset/img/blog/arrow-right.png";
import arrowBlue from "../asset/img/blog/arrow-right-blue.png";
function Blog() {
  return (
    <div className="my-10 mx-auto max-w-[350px] lg:max-w-[1140px] md:max-w-[700px]">
      <div className="pt-[60px]">
        <h2 className="font-bold text-5xl text-center">See Our Blog Post</h2>
        <div className="w-full">
          <div className="flex flex-row justify-center md:justify-end mb-4">
            <div className="max-w-[40px] max-h-[40px]">
              <img src={chervon_left} alt="" />
            </div>
            <div className="max-w-[40px] max-h-[40px]">
              <img src={chervon_right} alt="" />
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-blog-1 rounded-3xl flex flex-row justify-between bg-[#F8FFFE]">
            <div className="m-2">
              <img src={designTips} alt="" className="rounded p-1" />
            </div>
            <div className="mx-2 my-auto flex flex-col">
              <p className="text-xs font-normal">19 Feb, 2022/ By Admin</p>
              <p className="text-[26px] font-bold">UI/UX design Tips</p>
              <p>Promotion World has once placed PageTraffic among the top.</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#E71D36]">Read more</p>
                <img src={arrowRed} alt="" />
              </div>
            </div>
          </div>
          <div className="card-blog-2 rounded-3xl flex flex-row justify-between bg-[#F8FFFE]">
            <div className="m-2">
              <img src={designTips} alt="" className="rounded p-1" />
            </div>
            <div className="mx-2 my-auto flex flex-col ">
              <p className="text-xs font-normal">19 Feb, 2022/ By Admin</p>
              <p className="text-[26px] font-bold">UI/UX design Tips</p>
              <p>Promotion World has once placed PageTraffic among the top.</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#2EC4B6]">Read more</p>
                <img src={arrowBlue} alt="" />
              </div>
            </div>
          </div>
          <div className="card-blog-2 rounded-3xl flex flex-row justify-between bg-[#F8FFFE]">
            <div className="m-2">
              <img src={designTips} alt="" className="rounded p-1" />
            </div>
            <div className="mx-2 my-auto flex flex-col ">
              <p className="text-xs font-normal">19 Feb, 2022/ By Admin</p>
              <p className="text-[26px] font-bold">UI/UX design Tips</p>
              <p>Promotion World has once placed PageTraffic among the top.</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#2EC4B6]">Read more</p>
                <img src={arrowBlue} alt="" />
              </div>
            </div>
          </div>
          <div className="card-blog-1 rounded-3xl flex flex-row justify-between bg-[#F8FFFE]">
            <div className="m-2">
              <img src={designTips} alt="" className="rounded p-1" />
            </div>
            <div className="mx-2 my-auto flex flex-col">
              <p className="text-xs font-normal">19 Feb, 2022/ By Admin</p>
              <p className="text-[26px] font-bold">UI/UX design Tips</p>
              <p>Promotion World has once placed PageTraffic among the top.</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#E71D36]">Read more</p>
                <img src={arrowRed} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
