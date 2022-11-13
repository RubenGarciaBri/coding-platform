import * as React from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { navigationData, NavItem } from "../../../data";
import { profileMenuData } from "../../../data/profileMenu";

const Navbar = () => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center flex-shrink-0">
                  {/* <img
                    className="block w-auto lg:hidden"
                    src={logo}
                    alt="Logo"
                    width={32}
                    height={32}
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigationData.map(({ name, path }: NavItem) => (
                    <Link
                      key={name}
                      href={path}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                        path === router.pathname
                          ? "text-gray-900 border-indigo-500"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileMenuData.map(({ name, onClick }) => (
                        <Menu.Item key={name}>
                          {({ active }) => (
                            <a
                              onClick={onClick}
                              className={`block px-4 py-2 text-sm text-gray-700 cursor-pointer ${
                                active ? "bg-gray-100" : ""
                              }`}
                            >
                              {name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="flex items-center -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigationData.map(({ name, path }: NavItem) => (
                <Disclosure.Button as="a" key={name}>
                  <Link
                    href={path}
                    className={`block py-2 pl-3 pr-4 text-base font-medium border-l-4 ${
                      path === router.pathname
                        ? "text-indigo-700 border-indigo-500 bg-indigo-50"
                        : "text-gray-500 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {profileMenuData.map(({ name, onClick }) => (
                  <a
                    key={name}
                    onClick={onClick}
                    className="block px-4 py-2 text-base font-medium text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-800"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;