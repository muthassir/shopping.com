import React from "react";
import Carousel from "../components/Carousel";
import leftArrow from "../assets/left arrow 1.svg";
import rightArrow from "../assets/right arrow 1.svg";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/cream2.jpg";

import cart from "../assets/cart-large-2-svgrepo-com 5.svg";

const CarouselCard = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex lg:flex-row flex-col justify-between items-center">
      <button className="rounded-[40px] h-14 flex items-center justify-center px-4 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] hover:scale-105 transition-all duration-300">
  <span className="lg:text-4xl text-2xl mr-2">•</span>
  <span className="text-base lg:text-lg font-medium">Best Selling Products</span>
</button>


        <h1 className="lg:text-5xl text-2xl text-center">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h1>
        <div className="lg:flex hidden gap-6 ">
          <img src={leftArrow} alt="left" className="h-12" />
          <img src={rightArrow} alt="right" className="h-12" />
        </div>
      </div>
      <div className="lg:grid hidden grid-cols-3 justify-between items-center gap-4 mt-9  ">
        <div className="z-20 relative">
          <img
            src={sp1}
            alt="hero-img"
            className="  h-[600px] w-full rounded z-20 "
          />
          <div className="absolute bottom-6 lg:ml-10 rounded bg-[#EFF5E1] h-14 flex justify-between items-center gap-6 p-3 lg:w-[380px] md:w-[200px] ">
          
            <p className="text-[12px]">
              ALYA SKIN CLEANSER
              <br />
              <br />
              <span className="text-[#d3d3d3]">From $29.99</span>
            </p>
            <img
              src={cart}
              alt="img-plum"
              className="h-10 rounded-[5px] p-2  bg-[#d3d3d3]"
            />{" "}
          </div>
        </div>
        {/* 2 */}
        <div className="z-20 relative">
          <img
            src={sp2}
            alt="hero-img"
            className="  h-[600px] w-full rounded z-20 "
          />
         <div className="absolute bottom-6 lg:ml-10 rounded bg-[#EFF5E1] h-14 flex justify-between items-center gap-6 p-3 lg:w-[380px] md:w-[200px] ">
         <p className="text-[12px]">
              RITUAL OF SAKURA
              <br />
              <br />
              <span className="text-[#d3d3d3]">From $27.99</span>
            </p>
            <img
              src={cart}
              alt="img-plum"
              className="h-10 rounded-[5px]  p-2  bg-[#d3d3d3]"
            />{" "}
           
          </div>
        </div>
        {/* 3 */}
        <div className="z-20 relative">
          <img
            src={sp3}
            alt="hero-img"
            className="   h-[600px] w-full rounded z-20 "
          />
       <div className="absolute bottom-6 lg:ml-10 rounded bg-[#EFF5E1] h-14 flex justify-between items-center gap-6 p-3 lg:w-[380px] md:w-[200px] ">
          <p className="text-[12px]">
              THE BODY LOTION
              <br />
              <br />
              <span className="text-[#d3d3d3] ">From $19.99</span>
            </p>
            <img
              src={cart}
              alt="img-plum"
              className="h-10 rounded-[5px]  p-2  bg-[#d3d3d3]"
            />{" "}
          </div>
        </div>
      </div>

      {/* mobile and tab view */}
      <div className="lg:hidden flex">
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselCard;
