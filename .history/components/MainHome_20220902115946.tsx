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
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <h3 className="text-gray-500 hover:text-gray-900 cursor-pointer text-lg">
                  Work with us
                </h3>
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
              className="w-8 h-8 animate-bounce text-gray-600"
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
