import React from "react";
import cream2 from "../assets/cream2.jpg";
import headphone from "../assets/headphone-svgrepo-com 1.svg";

const Faq = () => {
  return (
    <div className="px-14 py-16 w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center">
      {/* section1 */}
      <div className="lg:w-1/2 w-full relative">
  <img src={cream2} alt="cream" className="rounded-[15px] w-full object-cover" />
  
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-[40px] bg-[#EFF5E1] h-16 flex justify-center items-center gap-4 px-4 w-72 shadow-md">
    <img
      src={headphone}
      alt="headphone"
      className="h-10 w-10 rounded-full border-2 object-cover"
    />
    <p className="text-[12px] text-center leading-tight">
      24/7 We're Here <br /> to help you
    </p>
  </div>
</div>

      {/* section1 ends*/}
      {/* section2 */}
      <div className="lg:w-1/2 w-full">
        <div className="px-18 py-8 flex justify-center items-center flex-col">
        <button className="rounded-[40px] h-14 flex items-center justify-center gap-2 px-4 py-2 z-20 w-64 text-[#2D3B36] border-[#2D3B36] border-2 hover:bg-[#2D3B36] hover:text-[#EFF5E1] hover:scale-105 transition-all duration-300">
  <span className="lg:text-4xl text-2xl">•</span>
  <span className="text-sm lg:text-base text-center">Frequently Asked Question</span>
</button>

          <h1 className="lg:text-5xl text-2xl mt-12 ">
            Answer to Your <br /> Skincare Questions, All <br /> in One Place.
          </h1>
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20">
  <div className="max-w-3xl mx-auto space-y-4">
    <div className="collapse collapse-plus bg-base-100 border border-base-300 mt-10 w-full">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">
        How do I create an account?
      </div>
      <div className="collapse-content text-sm">
        Click the "Sign Up" button in the top right corner and follow the
        registration process.
      </div>
    </div>

    <div className="collapse collapse-plus bg-base-100 border border-base-300 w-full">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title font-semibold">
        I forgot my password. What should I do?
      </div>
      <div className="collapse-content text-sm">
        Click on "Forgot Password" on the login page and follow the
        instructions sent to your email.
      </div>
    </div>

    <div className="collapse collapse-plus bg-base-100 border border-base-300 w-full">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">
        How do I update my profile information?
      </div>
      <div className="collapse-content text-sm">
        Go to "My Account" settings and select "Edit Profile" to make
        changes.
      </div>
    </div>

    <div className="collapse collapse-plus bg-base-100 border border-base-300 w-full">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">
        How do I update my profile information?
      </div>
      <div className="collapse-content text-sm">
        Go to "My Account" settings and select "Edit Profile" to make
        changes.
      </div>
    </div>

    <div className="collapse collapse-plus bg-base-100 border border-base-300 w-full">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">
        How do I update my profile information?
      </div>
      <div className="collapse-content text-sm">
        Go to "My Account" settings and select "Edit Profile" to make
        changes.
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      {/* section2 ends*/}
    </div>
  );
};

export default Faq;
