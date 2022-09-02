import Link from "next/link";
import React from "react";

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
      {/* Frameworks I use */}
      <div className="flex flex-col items-center py-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 items-center max-w-5xl mx-auto ">
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md m-2">
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
      <div>
      </div>
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
