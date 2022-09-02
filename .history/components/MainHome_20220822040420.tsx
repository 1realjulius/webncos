import Link from "next/link";
import React from "react";

const MainHome = () => {
  return (
    <div>
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center">
          <div>
            <h1 className="text-6xl text-center">Establish Your Brand Awareness,</h1>
          </div>
          <div>
            <h2 className="text-4xl">Build Trust With Your Awsome Brand.</h2>
          </div>
          <div className="flex flex-row">
            <div>
              <Link href="#">
                <h3>Checkout Our Pricing And Packages</h3>
              </Link>
            </div>
            <div>
              <Link href="#">
                <h3 className="text-blue-400">Join Our Agency</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Frameworks I use */}
      <div></div>
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
