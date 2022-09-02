import Link from "next/link";
import React from "react";
import Image from "next/image";
import FeatureImg  from "/Assets/Julius_Eghan.jpg"
import FImg  from "/Assets/Julius_Eghan.jpg"

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
      {/* Fameworks Used */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col gap-2 md:flex-row items-center">
          <div className="flex flex-col mx-4 p-2 bg-gray-300">
            <div>
              <h1>We Develop Websites with...</h1>
            </div>
            <div>
              <div>
                <div>Next js</div>
                <div>Webflow</div>
                <div>Html 5</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mx-4 bg-gray-300">
            <Image src="/Assets/Julius_Eghan.jpg" className="" width="180" height="180" alt="FeatureImg"/>
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
