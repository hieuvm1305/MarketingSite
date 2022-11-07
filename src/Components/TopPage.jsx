import React from "react";
import { useState, useEffect, useRef } from "react";
import image_man from "../asset/img/image_man.png";
import play from "../asset/img/play.png";
import imgframe from "../asset/img/Maskgroup.svg"
function TopPage() {
  const [navColor, setnavColor] = useState("");
  const navBar = useRef();
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("white") : setnavColor("");
    
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="header-section w-full relative">
      <img src={imgframe} alt=""  className="mask absolute z-10 w-full hidden lg:inline-block"/>
      <div
        className="navbar fixed w-full pt-[13px] z-40"
        style={{ transition: "all 1s", backgroundColor: navColor }}
        ref={navBar}
      >
        <nav className="flex flex-row mx-auto w-5/6 justify-between items-center">
          <div className="text-6xl text-red-500 font-bold">
            <a href="#service">DeMo.</a>
          </div>
          <div className="toppage-right flex flex-row gap-10 ">
            <ul className="listnav flex flex-row gap-10 items-center">
              <li className="listbar mt-5 ">
                <a href="#service" className="navlink px-1 font-normal">
                  Services
                </a>
              </li>
              <li className="mt-5">
                <a href="#package" className="navlink px-1 py-1 font-normal">
                  Package
                </a>
              </li>
              <li className="mt-5">
                <a href="#whoweare" className="navlink px-1 font-normal">
                  Who we are
                </a>
              </li>
              <li className="mt-5">
                <a href="#portfolio" className="navlink px-1 font-normal">
                  Our Protfolio
                </a>
              </li>
              <li className="mt-5">
                <a href="#aboutus" className="navlink px-1 font-normal">
                  About Us
                </a>
              </li>
            </ul>
            <button className="px-8 py-1 bg-red-500 rounded-3xl h-10 text-white font-bold my-auto">
              Contacts
            </button>
          </div>
          <div className="menu hidden">
            <div className="menu-cross"></div>
            <div className="menu-cross"></div>
            <div className="menu-cross"></div>

            <ul className="menu-link hidden">
              <li className="px-5">
                <a href="#service" className="navlink px-1 font-normal">
                  Services
                </a>
              </li>
              <li className="px-5">
                <a href="#package" className="px-1 font-normal">
                  Package
                </a>
              </li>
              <li className="px-1">
                <a href="#whoweare" className="px-1 font-normal">
                  Who we are
                </a>
              </li>
              <li className="px-1">
                <a href="#portfolio" className="px-1 font-normal">
                  Our Protfolio
                </a>
              </li>
              <li className="px-1">
                <a href="#aboutus" className="px-1 font-normal">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="introduction-par  w-full pt-[60px]" id={1 && "service"} >
        <div className="introduction  mx-auto md:mt-10 w-5/6 flex flex-row lg:justify-between items-end">
          <div className="intro-left z-30">
            <h1 className="left-title font-bold text-3xl md:text-6xl leading-tight lg:leading-snug">
              BEST <span className="text-red-500">MARKETING</span> COMPANY.
            </h1>
            <h4 className="left-subtitle font-medium text-2xl mt-8 xl:mt-[50px]">
              #1 MARKETING Services Agency in USA & UK
            </h4>
            <p className="left-detail mt-[30px] font-normal text-lg mb-10 max-w-[520px]">
              If you're looking for the best SEO company for your business,
              PageTraffic is the perfect choice.
            </p>
            <div className="btns flex flex-row pb-3 items-center">
              <button className="px-3 py-2 sm:px-9 rounded-[62px] bg-red-500">
                <a href="#service" className=" text-white font-bold text-xs  sm:text-xl">Get start</a>
              </button>
              <div className="play-btn flex flex-row text-center justify-between ml-[33px]">
                <img src={play} alt="play" />
                <a
                  href="#//"
                  className="watchvideo text-red-500 my-auto text-lg font-bold "
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
          <div className="right z-20">
            <img className="block" src={image_man} alt="man" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
