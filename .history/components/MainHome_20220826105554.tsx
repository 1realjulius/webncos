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
        <div className=" flex flex-col items-center justify-center my-20">
          <div className="pt-4 pb-2">
            <h1 className="text-4xl md:text-6xl text-center font-circularBold">
              Establish Your Brand Awareness,
            </h1>
          </div>
          <div className="pb-4">
            <h2 className="text-xl md:text-3xl font-circularMedium">
              Build Trust With Your Awsome Brand.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="px-3 py-1 my-2">
              <Link href="#">
                <h3 className="text-gray-500 hover:text-gray-900 cursor-pointer text-sm">
                  Checkout Our Pricing And Packages
                </h3>
              </Link>
            </div>
            <Link href="#">
              <div className="px-3 py-1 rounded-md bg-blue-200 active:bg-blue-300 my-2 cursor-pointer">
                <h3 className="text-blue-800 text-sm">Join Our Agency</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* trusted by brands */}
      <div className="bg-blue-200">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-lg text-white">
            The world's most innovative companies use Workflow
          </h2>
          <div className="flow-root mt-8 lg:mt-10">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                  alt="Tuple"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg"
                  alt="Mirage"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                  alt="Transistor"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                  alt="Workcation"
                />
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