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
          <h1 className="font-ShpockMabryBold text-2xl my-2">
            We Make Quality and Professinal Websites.
          </h1>
          <h3 className="flex flex-row space-x-2 items-center justify-center text-base text-gray-400">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>
            <span>// New website coming soon.</span>
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Let's work together at Webncos Agency 💰">
            <div className="flex flex-row items-center space-x-2 py-2 text-blue-600 cursor-pointer">
              <span className="leading-none font-ShpockMabryBold text-base">
                Contact Us
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
