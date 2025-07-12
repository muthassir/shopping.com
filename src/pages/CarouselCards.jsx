import React from "react";
import Carousel from "../components/Carousel";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/cream2.jpg";

import cart from "../assets/cart-large-2-svgrepo-com 5.svg";

const CarouselCards = () => {
  return (
    <div className="px-8 py-8">
        <h1 className="text-5xl text-center">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h1>
      <div className="flex lg:flex-row flex-col justify-center mt-8 gap-6 items-center">
      <button className="rounded-[40px] h-14 flex items-center justify-center px-6 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] transition-all duration-300">
    NEW ARRIVAL
  </button>
  
  <button className="rounded-[40px] h-14 flex items-center justify-center px-6 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] transition-all duration-300">
    CLEANSING
  </button>
  
  <button className="rounded-[40px] h-14 flex items-center justify-center px-6 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] transition-all duration-300">
    ACNE FIGHTER
  </button>
  
  <button className="rounded-[40px] h-14 flex items-center justify-center px-6 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] transition-all duration-300">
    ANTI AGING
  </button>
       
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

export default CarouselCards;
