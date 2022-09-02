import Link from "next/link";
import React from "react";
import Image from "next/image";
import FeatureImg from "/Assets/Julius_Eghan.jpg";
import FImg from "/Assets/Julius_Eghan.jpg";

const MainHome = () => {
  return (
    <div className="max-w-7xl">
      {/* header */}
      <div className="md:my-20">
        <div className=" flex flex-col items-center justify-center mt-[160px] md:mt-4 mb-4">
          <div className="pt-4 pb-2">
            <h1 className="text-6xl md:text-9xl text-center font-parcel px-2">
              ESTABLISH YOUR BRAND AWARENESS,
            </h1>
          </div>
          <div className="">
            <h2 className="text-2xl md:text-4xl font-parcel px-2 py-2">
              GET YOUR WEBSITE TO SPEAK FOR YOUR BRAND.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center py-6">
            <div className="pr-8 py-1 my-2">
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
                  <h3 className="text-gray-500 hover:text-gray-900 cursor-pointer text-xl">
                    Work with us
                  </h3>
                </div>
              </Link>
            </div>
            <Link href="#">
              <div className="flex flex-row items-center space-x-2 px-3 py-1 rounded-md bg-blue-100 active:bg-blue-300 my-2 cursor-pointer">
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
                <h3 className="text-blue-800 text-xl">
                  Check Out Our Packages
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col mt-2 items-center justify-center pb-4 mb-10">
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
      <div className="flex flex-col bg-white p-4 px-4 md:px-24 items-center justify-center">
        <div className="py-2">
          <h1 className="text-4xl">WE DEVELOP WEBSITES AND SOFTWARES WITH..</h1>
        </div>
        <div className="p-2 flex flex-col md:flex-row border-2 border-blue-400 bg-blue-200 rounded-lg">
          <div className="flex flex-row">
            <div className="p-2 text-center">
              <div className="flex flex-col items-center">
                <div className="items-center flex flex-row text-center">
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
              </div>
              <div>
                <p className="text- base md:text-xl">
                  The React Framework that makes developing
                  websites super functional.
                </p>
              </div>
            </div>
            <div className="p-2 text-center">
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-spin h-8 w-8 flex-none stroke-blue-400"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                    <ellipse
                      cx="16"
                      cy="16"
                      rx="13"
                      ry="5"
                      transform="rotate(60 16 16)"
                    ></ellipse>
                    <ellipse
                      rx="13"
                      ry="5"
                      transform="matrix(-.5 .86603 .86603 .5 16 16)"
                    ></ellipse>
                    <circle cx="16" cy="16" r="2"></circle>
                  </svg>
                  <span className="ml-2.5 font-cadizMedium">React Native</span>
                </div>
              </div>
              <div>
                <p className="text- base md:text-xl">
                React Native combines the best parts of native development with React.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="p-2 text-center">
              <div className=" flex flex-col items-center">
                <div className="items-center flex space-x-2">
                  <Image
                    src="/Assets/swift_icon.png"
                    width={24}
                    height={24}
                    alt="webncos logo"
                    className=""
                  />
                  <span>SWIFT</span>
                </div>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  Swift. A powerful open language that lets everyone build
                  amazing apps.
                </p>
              </div>
            </div>
            <div className="p-2 text-center">
              <div className="mx-2">
                <div className="flex flex-col items-center">
                  <span>
                    <svg
                      width="60"
                      height="18"
                      viewBox="0 0 89 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.495 8.724C28.495 7.124 26.96 5.446 24.292 5.446C21.3 5.446 18.015 7.649 17.512 12.046C16.998 16.486 19.749 18.459 22.522 18.459C25.295 18.459 26.747 17.374 28.232 15.927C26.955 14.317 25.306 15.061 24.99 15.225C24.4669 15.5165 23.8745 15.6606 23.276 15.642C22.206 15.642 21.114 15.16 21.114 13.154C27.97 12.474 28.494 10.314 28.494 8.724H28.495ZM25.097 8.987C25.053 9.48 24.857 10.324 21.385 10.797C22.115 8.187 23.515 7.991 24.158 7.991C24.2883 7.98505 24.4184 8.00722 24.5394 8.056C24.6604 8.10478 24.7694 8.17903 24.8592 8.27371C24.9489 8.36839 25.0172 8.48127 25.0595 8.6047C25.1017 8.72812 25.1169 8.85919 25.104 8.989L25.097 8.987ZM13.485 9.415L11.891 14.447L10.766 5.71C8.256 5.71 6.906 7.508 6.202 9.404L4.258 14.458L3.985 9.458C3.837 7.134 1.715 5.72 0 5.72L2.074 18.36C4.704 18.35 6.124 16.562 6.867 14.666L8.511 10.369C8.526 10.544 9.647 18.361 9.647 18.361C12.289 18.361 13.709 16.684 14.47 14.853L18.17 5.721C15.565 5.721 14.192 7.508 13.483 9.415H13.485ZM38.191 5.415C36.564 5.415 35.321 6.303 34.271 7.607V7.597L35.209 0C33.047 0 31.289 1.886 30.951 4.692L29.325 18.262C30.57 18.262 31.891 17.9 32.601 16.979C33.235 17.801 34.184 18.459 35.593 18.459C39.239 18.459 41.74 14.206 41.74 10.215C41.718 6.575 39.96 5.425 38.202 5.425L38.191 5.415ZM37.851 11.938C37.471 14.163 36.235 15.676 35.046 15.676C33.857 15.676 33.332 15.139 33.332 15.139C33.562 13.189 33.704 11.993 34.14 10.962C34.576 9.931 35.614 8.287 36.695 8.287C37.755 8.287 38.235 9.701 37.852 11.937L37.851 11.938ZM50.833 5.711H48.289L48.299 5.579C48.474 3.913 48.867 3.036 50.163 2.893C51.048 2.805 51.441 2.345 51.539 1.841L51.856 0.0760002C46.756 0.0430002 45.142 2.256 44.731 5.634L44.721 5.711H44.666C43.836 5.711 42.92 6.654 42.766 7.849L42.711 8.287H44.415L42.985 20.147L42.547 22.274C42.602 22.274 42.667 22.284 42.721 22.284C45.111 22.196 46.641 20.3 46.979 17.548L48.095 8.285H48.895C49.681 8.285 50.599 7.495 50.759 6.18L50.833 5.711ZM64.065 5.491C61.128 5.491 58.355 7.661 57.505 11.071C56.655 14.481 57.943 18.514 62.265 18.514C66.587 18.514 69.062 14.314 69.062 10.818C69.066 7.343 66.72 5.49 64.066 5.49L64.065 5.491ZM65.255 11.827C65.103 13.373 64.425 15.719 62.569 15.719C60.713 15.719 60.964 12.979 61.144 11.674C61.341 10.282 62.116 8.298 63.786 8.298C65.288 8.298 65.429 10.085 65.256 11.828L65.255 11.827ZM83.575 9.404L81.981 14.436C81.938 14.041 80.857 5.699 80.857 5.699C78.347 5.699 77.003 7.497 76.299 9.393L74.355 14.447C74.345 14.085 74.082 9.447 74.082 9.447C73.924 7.123 71.804 5.709 70.082 5.709L72.145 18.349C74.775 18.339 76.195 16.551 76.938 14.655L78.576 10.358C78.586 10.533 79.712 18.35 79.712 18.35C82.354 18.35 83.768 16.673 84.535 14.842L88.238 5.71C85.64 5.71 84.264 7.497 83.565 9.404H83.575ZM53.235 0.0740013L51.095 17.404L50.657 19.542C50.711 19.542 50.777 19.552 50.831 19.552C53.133 19.519 54.771 17.492 55.078 14.937L56.311 4.994C56.685 1.957 54.884 0.0720005 53.235 0.0720005V0.0740013Z"
                        fill="#4353FF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <p className="text- base md:text-xl">
                  Webflow is an asome no-code solution we have for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fameworks Used */}
      <div className="py-12 ">
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
