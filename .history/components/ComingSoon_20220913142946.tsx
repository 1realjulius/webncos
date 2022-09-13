import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black bg-slate-50">
      <div className="max-w-7xl min-h-screen flex flex-col items-center justify-center">
        <div className="p-4 text-center">
          <div>
            <Link href="#">
              <Image
                src="/Assets/webncos-logo-lg.svg"
                width={100}
                height={22}
                alt="webncos logo"
                className=""
              />
            </Link>
          </div>
          <h1 className="text-2xl my-2">We Make Professioanl Websites.</h1>
          <h3 className="font-DosisMedium text-base mb-2 text-gray-400">
            // New website coming soon.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Let's work together at Webncos Agency 💰">
            <div className="flex flex-row items-center space-x-2 py-2 text-blue-600 cursor-pointer">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <span className="leading-none">Contact Us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
