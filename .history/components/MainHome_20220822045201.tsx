import Link from "next/link";
import React from "react";
import RndomCodes from "./RndomCodes";

const MainHome = () => {
  const incentives = [
    {
      name: "Free Shipping",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    },
    {
      name: "24/7 Customer Support",
      description:
        "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
    },
    {
      name: "Fast Shopping Cart",
      description:
        "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
    },
    {
      name: "Gift Cards",
      description:
        "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    },
  ];

  return (
    <div>
      {/* header */}
      <div>
        <div className=" flex flex-col items-center justify-center my-14">
          <div className="pt-4 pb-2">
            <h1 className="text-4xl md:text-6xl text-center">
              Establish Your Brand Awareness,
            </h1>
          </div>
          <div className="pb-4">
            <h2 className="text-xl md:text-3xl">
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
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 items-center max-w-7xl mx-auto ">
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
          <div className="flex flex-col border border-gray-300 p-2 rounded-md mx-4">
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
        <RndomCodes />
      </div>
      {/* Incertives */}
      <div>
        <div className="bg-gray-50">
          <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {incentives.map((incentive) => (
                <div key={incentive.name}>
                  <img
                    src={incentive.imageSrc}
                    alt=""
                    className="h-24 w-auto"
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
