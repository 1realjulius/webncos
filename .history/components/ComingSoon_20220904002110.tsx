import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-7xl min-h-screen flex flex-col items-center justify-center">
        <div className="p-4 text-center">
          <div className="m-2">
            <span className="text-base text-blue-500">Coming Soon</span>
          </div>
          <h1 className="font-DosisSemiBold text-5xl md:text-7xl md:my-10 my-6">
            We Build Brands, We Create Change.
          </h1>
          <h3 className="font-DosisMedium text-lg md:text-2xl mb-4">
            We Are A Group Of Freelance Developers And Graphic Designers That
            Help Create Change in The World.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Let's work together at Webncos Agency 💰">
            <div className="flex flex-row items-center space-x-2 bg-white px-3 py-2 rounded-lg active:bg-blue-200 cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <span className="font-DosisSemiBold leading-none">Work With Us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
