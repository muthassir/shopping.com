import React from "react";
import cream from "../assets/cream.png";
import star from "../assets/award-svgrepo-com 1.svg";

const Banner = () => {
  return (
    <div className="px-14 py-8 w-full flex justify-center items-center lg:flex-row flex-col lg:gap-16 mt-20 text-[#2D3B36]">
      {/* section - 1 */}
      <div className="lg:w-1/2 w-full">
        <button className="rounded-[40px] h-14 flex items-center justify-center px-4 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] hover:scale-105 transition-all duration-300">
          <span className="lg:text-4xl text-xl mr-2">•</span>
          <span className="text-base lg:text-lg">Why our Products</span>
        </button>
        <h1 className="mt-12 text-4xl">
          YOUR SKIN DESERVES <br /> THE BEST CARE.
        </h1>
        <p className="mt-3">
          Discover a curated collection of skincare products designed to
          rejuvenate,
          <br />
          protect, and pamper your skin. Explore our rage crafted with love
          backed <br />
          by science, and inspired by nature.
        </p>
        <div className="flex justify-between gap-6 mt-8">
        <h1 className="lg:text-5xl text-2xl bg-gradient-to-b from-[#2d3b36] to-[#f3fff4] bg-clip-text text-transparent">
  01
</h1>
          <div className="flex flex-col  gap-9">
            <h1 className="lg:text-5xl text-2xl ">Bio Ingredients</h1>
            <p>
              Get naturally beautiful and transform with our bio ingredients
              creams for healthy, radiant skin.
            </p>
          </div>
        </div>
        <div className="flex  mt-8">
        <h1 className="lg:text-5xl text-2xl bg-gradient-to-b from-[#2d3b36] to-[#fefff4] bg-clip-text text-transparent">
  02
</h1>
          <div className="flex flex-col gap-9 ">
            <h1 className="lg:text-5xl text-2xl ml-5 ">Everything Natural</h1>
            <p className="ml-6">
              Pure ingredients for pure skin. The Perfect solution for your skin
              care needs.
            </p>
          </div>
        </div>{" "}
        <div className="flex  gap-6 mt-8">
        <h1 className="lg:text-5xl text-2xl bg-gradient-to-b from-[#2d3b36] to-[#fefff4] bg-clip-text text-transparent">
  03
</h1>
          <div className="flex flex-col gap-9 ">
            <h1 className="lg:text-5xl text-2xl ">All Handmade</h1>
            <p>
              Made with love and care. Just for you. Give your skin the tender
              loving care it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* section -1 ends */}
      {/* section -2 */}
      <div className="lg:w-1/2 w-full">
      <div className="relative">
  <img
    src={cream}
    alt="cream"
    className="rounded-[15px] h-full lg:mt-0 mt-4 w-full object-cover"
  />
  
  {/* Centered info box on image */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-[40px] bg-[#EFF5E1] h-16 flex justify-center items-center gap-4 px-4 w-72 shadow-md">
    <img
      src={star}
      alt="img-star"
      className="h-10 w-10 rounded-full border-dotted border-black border-2 bg-[#fefff4] object-cover"
    />
    <p className="text-[12px] text-center">
      Best Skin Care product Award Winning
    </p>
  </div>
</div>

        <div className="flex justify-between">
          <p>Since 2001</p>
          <p>Learn more</p>
        </div>
      </div>
      {/* section 2 - ends */}
    </div>
  );
};

export default Banner;
