/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  return (
    <Disclosure as="nav" className="bg-white absolute top-1">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  {/* the logo */}
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
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8"></div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <a
                  href="#"
                  className="text-gray-500 text-lg hover:text-gray-900 inline-flex items-center px-3 pt-1 "
                >
                  Features
                </a>
                <a
                  href="#"
                  className=" text-gray-500 hover:text-gray-900 inline-flex items-center px-3 pt-1  text-lg"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className=" text-gray-500 hover:text-gray-900 inline-flex items-center px-3 pt-1  text-lg"
                >
                  About Us
                </a>
                <Link href="#">
                  <div className="px-4 py-1 bg-blue-200 active:bg-blue-300 rounded-md cursor-pointer">
                    <h2 className="text-blue-800 text-lg">Talk To Us</h2>
                  </div>
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden border-2 rounded-lg px-2 mx-2">
            <div className="flex flex-col pt-2 space-y-1 items-center">
              <a
                className="hover:bg-gray-100 w-full text-center py-2 rounded-md text-lg"
                href="#"
              >
                Features
              </a>
              <a
                className="hover:bg-gray-100 w-full text-center py-2 rounded-md text-lg"
                href="#"
              >
                Testimonials
              </a>
              <a
                className="hover:bg-gray-100 w-full text-center py-2 rounded-md text-lg"
                href="#"
              >
                About Us
              </a>
            </div>
            <div className="flex py-2 items-center justify-center">
              <Link href="#">
                <div className="px-3 py-1 bg-blue-200 active:bg-blue-300 rounded-md cursor-pointer">
                  <h2 className="text-blue-800 text-lg">Contact Us</h2>
                </div>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
