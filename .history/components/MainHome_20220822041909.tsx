import Link from "next/link";
import React from "react";

const MainHome = () => {
  return (
    <div>
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center my-14">
          <div className="pt-4 pb-2">
            <h1 className="text-4xl md:text-6xl text-center">Establish Your Brand Awareness,</h1>
          </div>
          <div className="pb-4">
            <h2 className="text-xl md:text-3xl">Build Trust With Your Awsome Brand.</h2>
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
      {/* Frameworks I use */}
      <div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 items-center">
            <div>f1</div>
            <div>f1</div>
            <div>f1</div>
            <div>f1</div>
            <div>f1</div>
            <div>f1</div>
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
