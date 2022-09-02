import Link from "next/link";
import React from "react";
import Image from "next/image";
import FeatureImg from "/Assets/Julius_Eghan.jpg";
import FImg from "/Assets/Julius_Eghan.jpg";

const MainHome = () => {
  return (
    <div>
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center mt-20 mb-10">
          <div className="pt-4 pb-2">
            <h1 className="text-6xl md:text-9xl text-center font-parcel px-2">
              ESTABLISH YOUR BRAND AWARENESS,
            </h1>
          </div>
          <div className="pb-2">
            <h2 className="text-2xl md:text-4xl font-parcel px-2">
              GET YOUR WEBSITE TO SPEAK FOR YOUR BRAND.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="px-3 py-1 my-2">
              <Link href="#">
                <h3 className="text-gray-500 hover:text-gray-900 cursor-pointer text-lg">
                  Checkout Our Pricing And Packages
                </h3>
              </Link>
            </div>
            <Link href="#">
              <div className="px-3 py-1 rounded-md bg-blue-200 active:bg-blue-300 my-2 cursor-pointer">
                <h3 className="text-blue-800 text-lg">Join Our Agency</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="h-6 w-full bg-gradient-to-b from-white to-blue-200"></div> */}
      {/* trusted by brands */}
      <div className="bg-blue-200">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:py-6 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <h2 className="max-w-md mx-auto text-xl font-circularMedium text-indigo-900 text-center lg:max-w-xl lg:text-left">
            Our Developers work at
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"
                  alt="Workcation"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-8" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-8" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Fameworks Used */}
      <div></div>
      {/* Services We offer (Features) */}
      <div></div>
      {/* Testimonials */}
      <div></div>
      {/* FAQs */}
      <div></div>
      {/* Other Sections */}
      <div></div>
    </div>
  );
};

export default MainHome;
