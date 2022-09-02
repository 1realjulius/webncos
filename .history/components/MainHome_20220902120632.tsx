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
        <div className=" flex flex-col items-center justify-center mt-20 mb-4">
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
                <div className="flex flex-row items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-gray-500 hover:text-gray-900 cursor-pointer text-lg">
                    Work with us
                  </h3>
                </div>
              </Link>
            </div>
            <Link href="#">
              <div className="flex flex-row items-center space-x-2 px-3 py-1 rounded-md bg-blue-200 active:bg-blue-300 my-2 cursor-pointer">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-blue-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </span>
                <h3 className="text-blue-800 text-lg">
                  Check Out Our Packages
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col mt-2 items-center justify-center pb-4">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="text-sm text-gray-600">Scroll</span>
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
              <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none stroke-slate-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient
                      id="next-icon-gradient"
                      x1="14.875"
                      y1="18"
                      x2="24"
                      y2="27.125"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".24" stopColor="#94A3B8"></stop>
                      <stop
                        offset="1"
                        stopColor="#94A3B8"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    cx="16"
                    cy="16"
                    r="12.25"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <path
                    d="M11.75 21.25v-9.5L24 26"
                    stroke="url(#next-icon-gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 11.75a.75.75 0 0 0-1.5 0v4.172l1.5 1.64V11.75Z"
                    fill="#94A3B8"
                    strokeWidth="0"
                  ></path>
                </svg>
                <span className="ml-2.5 font-cadizMedium">Next.js</span>
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
