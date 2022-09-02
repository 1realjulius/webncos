import Link from "next/link";
import React from "react";
import { Carousel } from "flowbite-react";

const MainHome = () => {
  return (
    <div>
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center my-20">
          <div className="pt-4 pb-2">
            <h1 className="text-4xl md:text-7xl text-center font-ApercuBold">
              Establish Your Brand Awareness,
            </h1>
          </div>
          <div className="pb-4">
            <h2 className="text-xl md:text-3xl font-ApercuMedium">
              Build Trust With Your Awsome Brand.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="px-3 py-1 my-2">
              <Link href="#">
                <h3 className="text-sm">Checkout Our Pricing And Packages</h3>
              </Link>
            </div>
            <div className="px-3 py-1 rounded-md bg-blue-200 my-2">
              <Link href="#">
                <h3 className="text-blue-800 text-sm">Join Our Agency</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* carosel */}
      <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-4">
          <Carousel>
            <div className="flex h-full items-center justify-center bg-red-400 dark:bg-gray-700 dark:text-white">
            <div className="flex flex-col items-start pt-2 p-2 border m-2 bg-white rounded-lg border-gray-300">
            <div className="flex items-center text-sm font-medium text-slate-500">
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
                    <stop offset="1" stopColor="#94A3B8" stopOpacity="0"></stop>
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
            <h2 className="text-sm font-cadizMedium">
              Next Js Websites. I write clean and functional codes for websites
              like <span className="text-blue-400"> E-comerce</span>,{" "}
              <span className="text-blue-400">Portfolio sites</span>,
              <span className="text-blue-400"> Agency Sites</span> and{" "}
              <span className="text-blue-400">Saas Sites.</span>
            </h2>
          </div>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
        </div>
      </div>
      {/* Frameworks I use */}
      <div className="flex flex-col items-center py-4 bg-gray-100">
        <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-2 items-center max-w-5xl mx-auto ">
          <div className="flex flex-col items-start pt-2 p-2 border m-2 bg-white rounded-lg border-gray-300">
            <div className="flex items-center text-sm font-medium text-slate-500">
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
                    <stop offset="1" stopColor="#94A3B8" stopOpacity="0"></stop>
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
            <h2 className="text-sm font-cadizMedium">
              Next Js Websites. I write clean and functional codes for websites
              like <span className="text-blue-400"> E-comerce</span>,{" "}
              <span className="text-blue-400">Portfolio sites</span>,
              <span className="text-blue-400"> Agency Sites</span> and{" "}
              <span className="text-blue-400">Saas Sites.</span>
            </h2>
          </div>
          <div className="flex flex-col border border-gray-300 bg-white p-2 rounded-md m-2">
            <div className="flex flex-row items-center space-x-2">
              <span>Img</span>
              <h3>The Framework Title</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                This is a short summary of the framework i use the framework
                title will have the link to the framework website
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 bg-white p-2 rounded-md m-2">
            <div className="flex flex-row items-center space-x-2">
              <span>Img</span>
              <h3>The Framework Title</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                This is a short summary of the framework i use the framework
                title will have the link to the framework website
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 bg-white p-2 rounded-md m-2">
            <div className="flex flex-row items-center space-x-2">
              <span>Img</span>
              <h3>The Framework Title</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                This is a short summary of the framework i use the framework
                title will have the link to the framework website
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 bg-white p-2 rounded-md m-2">
            <div className="flex flex-row items-center space-x-2">
              <span>Img</span>
              <h3>The Framework Title</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                This is a short summary of the framework i use the framework
                title will have the link to the framework website
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300 bg-white p-2 rounded-md m-2">
            <div className="flex flex-row items-center space-x-2">
              <span>Img</span>
              <h3>The Framework Title</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                This is a short summary of the framework i use the framework
                title will have the link to the framework website
              </p>
            </div>
          </div>
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
