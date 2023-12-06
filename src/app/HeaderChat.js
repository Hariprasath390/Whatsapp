import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import BgImage from "../app/images/whatsappbg.png";

const navigation = [
  { name: "Ibrahim Shafi IT HEAD Myunde ", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderChat() {
  return (
    <div
      className="w-full hidden md:block"
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
        height: "98vh",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <Disclosure as="nav" className=" w-full ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl ">
              <div className="relative flex h-[59px] items-center justify-between bg-[#e9edef] px-2">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto rounded-full"
                      src="https://pps.whatsapp.net/v/t61.24694-24/300779609_580249773834377_2469441264500027299_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdS4yOgYbCJ9b_LbW1LUwrS2xqFcMTKGzE_yNVzQy5AGJQ&amp;oe=657ACCCE&amp;_nc_sid=e6ed6c&amp;_nc_cat=105"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className=" space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? " text-black"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill="currentColor"
                      d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                    ></path>
                  </svg>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          fill="currentColor"
                          d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                        ></path>
                      </svg>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="">
        <div className="  flex justify-center py-2">
          <div className="bg-white flex justify-center items-stretch p-1 rounded-md">
            <p className="text-xs font-sans font-semibold text-gray-600">
              Wednesday
            </p>
          </div>
        </div>

        <div
          tabIndex="-1"
          className="n5hs2j7m oq31bsqd gx1rr48f qh5tioqs"
          data-tab="8"
          role="application"
        >
          <div className="  flex pl-14 pb-2">
            <svg
              className="h-4 w-4 text-white -mx-2"
              fill="none"
              viewBox="0 0 8 13"
              stroke="currentColor"
            >
              <path
                stroke-opacity="0.13"
                fill="#0000000"
                d="M1.533,3.568L8,12.193V1H2.812C1.042,1,0.474,2.156,1.533,3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
              ></path>
            </svg>

            <div className="bg-white flex flex-col items-stretch p-1 rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-sans font-semibold text-gray-600">
                  Hi
                </p>
                <span className="text-[9px] text-gray-600 pl-2 pt-3">
                  5:02 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          tabIndex="-1"
          className="n5hs2j7m oq31bsqd gx1rr48f qh5tioqs"
          data-tab="8"
          role="application"
        >
          <div className="  flex justify-end pr-14 pb-2">
            <div className="bg-[#c5e6c1] flex flex-col items-stretch p-1 rounded-md">
              <div className="flex justify-between">
                  <p className="text-xs font-semibold font-sans space-x-2">
                      Thank you for contacting
                      <a
                        href="http://MYUNDE.COM"
                        title="http://MYUNDE.COM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 font-sans text-xs hover:underline space-x-2 "
                      >
                        &nbsp;MYUNDE.COM
                      </a>
                      ! Please let us know how we can help you.
                    </p>
                <div className="flex items-center justify-end pl-2 pt-3">
                  <span className="text-[10px] text-gray-600">5:22 pm</span>
                  <span className="ml-2" data-icon="msg-dblcheck">
                    <svg
                      viewBox="0 0 16 11"
                      height="16"
                      width="12"
                      preserveAspectRatio="xMidYMid meet"
                      fill="none"
                    >
                      <title>msg-dblcheck</title>
                      <path
                        d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-0 s8B">
              <svg
                viewBox="0 0 8 13"
                height="13"
                width="8"
                class="fill-current text-[#c5e6c1] -mx-[1.9px]"
              >
                <title>tail-out</title>
                <path
                  opacity="0.13"
                  d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between p-3 bg-gray-200 bottom-0 absolute">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="p-2 rounded-full focus:outline-none">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-700 fill-current"
                >
                  <title>attach-menu-plus</title>
                  <path
                    d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>

            <button className="p-2  bg-white focus:outline-none flex items-center gap-4 rounded-md">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-700 fill-current"
              >
                <title>smiley</title>
                <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
              </svg>
              <input
                type="text"
                className="p-1   rounded focus:outline-none w-[753px]"
                placeholder="Type a message"
              />
            </button>
          </div>
          <div className="relative">
            <button className="p-2  rounded-full focus:outline-none">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-700 fill-current"
              >
                <title>ptt</title>
                <path d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885L18.237,11.412z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2"></div>
      </footer>
    </div>
  );
}

export default HeaderChat;
