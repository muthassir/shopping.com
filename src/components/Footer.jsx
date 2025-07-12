import React from "react";

const Footer = () => {
  return (
    <footer className="  bg-[#35433E] w-full overflow-hidden">
      <div className=" flex lg:flex-row flex-col justify-between px-8 py-8 ">
        {/* section1 */}
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-3xl text-2xl text-start">
            Join The Skincare <br /> Community Now.
          </h1>
          <ul className="flex lg:flex-row flex-col gap-14 mt-20">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        {/* section2 */}
        <div className="lg:w-1/2 w-full">
          <h1 className="mr-44 ">Get in Touch</h1>
          <h1 className="lg:text-3xl text-2xl">contact.skincare.com</h1>
          <ul className="flex gap-14 mt-20 justify-center lg:flex-row flex-col">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
     
      <h1 className='  text-[80px] md:text-[200px] lg:text-[300px] font-bold  z-0 w-full text-center text-[#2d3b36]'>
          SKINCARE
        </h1>
    </footer>
  );
};

export default Footer;
