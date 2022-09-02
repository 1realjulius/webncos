import Link from "next/link";
import React from "react";
import Image from "next/image";
import FeatureImg from "/Assets/Julius_Eghan.jpg";
import FImg from "/Assets/Julius_Eghan.jpg";

const MainHome = () => {
  return (
    <div className="max-w-7xl">
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center mt-20 mb-10">
          <div className="pt-4 pb-2">
            <h1 className="text-6xl md:text-9xl text-center font-parcel px-2">
              ESTABLISH YOUR BRAND AWARENESS,
            </h1>
          </div>
          <div className="">
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
        <div className=" flex mt-2 items-center justify-center">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
      </div>
      {/* We develop brands */}
      <div className="flex flex-col bg-blue-200 p-4 px-4 md:px-24 items-center justify-center">
        <div className="py-2">
          <h1 className="text-4xl">WE DEVELOP WEBSITES AND SOFTWARES WITH..</h1>
        </div>
        <div className="p-2 flex flex-col md:flex-row border border-blue-500">
          <div className="flex flex-row">
            <div className="p-2 text-center">
              <div>
                <h1 className="text-2xl">Next Js</h1>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  The Java Script Framework that makes developing websites super
                  functional.
                </p>
              </div>
            </div>
            <div className="p-2 text-center">
              <div>
                <h1 className="text-2xl">React Native</h1>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  The Java Script Framework that makes developing websites super
                  functional.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="p-2 text-center">
              <div>
                <h1 className="text-2xl">Swift</h1>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  The Java Script Framework that makes developing websites super
                  functional.
                </p>
              </div>
            </div>
            <div className="p-2 text-center">
              <div>
                <h1 className="text-2xl">Kotlin</h1>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  The Java Script Framework that makes developing websites super
                  functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fameworks Used */}
      <div className="py-12 bg-blue-800">
        <div className="flex flex-col items-center justify-center mx-4">
          <h1 className="text-5xl py-2 flex items-baseline">
            <p className="text-lg px-1">We're</p> SOLUTIONS ORIENTED
          </h1>
          <p className="text-center text-2xl md:text-3xl md:px-14">
            We’re specialists, not generalists. Our company was built to provide
            deep expertise in digital channels that are extremely complex, and
            changing daily. We offer integrated solutions with unique services
            and deliverables tailored to unlock full-funnel growth.
          </p>
        </div>
      </div>
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
