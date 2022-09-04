import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-7xl min-h-screen">
        <div className="p-4 text-center">
          <h1 className="font-DosisSemiBold text-4xl">
            We Build Brands, We Create Change.
          </h1>
          <h3 className="font-DosisMedium">
            We Are A Group Of Freelance Developers And Graphic Designers That
            Help Create Change in The World.
          </h3>
        </div>
        <div>
          <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Let's work together 💰">
            <div>
              <span></span>
              <span>Work With Us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
