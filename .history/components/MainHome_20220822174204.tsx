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
