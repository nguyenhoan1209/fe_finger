import React from "react";
import "./HomePage.css";
import Sidebar from "../../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 ">
          {/* HeroBar */}
          <div className="  px-1 py-20     ">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                FingerID
                <strong className="font-extrabold text-yellow-700 sm:block">
                  {" "}
                  Soultions make diffrences{" "}
                </strong>
              </h1>
              <p className="mt-4 sm:text-2xl/relaxed">
                Discover how FingerID Solutions make a difference in shaping our
                world!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="#" //add link to sign up page
                >
                  Get Started
                </a>
                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-yellow-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="#" // add link to the doc of tutorial if you have
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/*Call To Action*/}
          <div className="  items-center justify-center h-90 mb-10 mt-10 rounded  dark:bg-gray-800  ">
            <section className="relative z-10 overflow-hidden bg-green-600 py-16 px-8 ">
              <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="text-center lg:text-left ">
                      <div className="mb-10 lg:mb-0 ">
                        <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                          Strarting sign up right now in the box
                        </h1>
                        <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white"></p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="text-center lg:text-right">
                      <a
                        className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                        href="#" //add the direct link to the sign up page
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span className="absolute top-0 right-0 -z-10">
                <svg
                  width={388}
                  height={250}
                  viewBox="0 0 388 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.05"
                    d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                    fill="url(#paint0_linear_971_6910)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_971_6910"
                      x1="60.5"
                      y1={111}
                      x2={287}
                      y2={111}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.520507" stopColor="white" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute top-0 right-0 -z-10">
                <svg
                  width={324}
                  height={250}
                  viewBox="0 0 324 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.05"
                    d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                    fill="url(#paint0_linear_971_6911)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_971_6911"
                      x1="60.5"
                      y1={111}
                      x2={287}
                      y2={111}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.520507" stopColor="white" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute top-4 left-4 -z-10">
                <svg
                  width={43}
                  height={56}
                  viewBox="0 0 43 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <circle
                      cx="40.9984"
                      cy="1.49626"
                      r="1.49626"
                      transform="rotate(90 40.9984 1.49626)"
                      fill="white"
                    />
                    <circle
                      cx="27.8304"
                      cy="1.49626"
                      r="1.49626"
                      transform="rotate(90 27.8304 1.49626)"
                      fill="white"
                    />
                    <circle
                      cx="14.6644"
                      cy="1.49626"
                      r="1.49626"
                      transform="rotate(90 14.6644 1.49626)"
                      fill="white"
                    />
                    <circle
                      cx="1.49642"
                      cy="1.49626"
                      r="1.49626"
                      transform="rotate(90 1.49642 1.49626)"
                      fill="white"
                    />
                    <circle
                      cx="40.9984"
                      cy="14.6642"
                      r="1.49626"
                      transform="rotate(90 40.9984 14.6642)"
                      fill="white"
                    />
                    <circle
                      cx="27.8304"
                      cy="14.6642"
                      r="1.49626"
                      transform="rotate(90 27.8304 14.6642)"
                      fill="white"
                    />
                    <circle
                      cx="14.6644"
                      cy="14.6642"
                      r="1.49626"
                      transform="rotate(90 14.6644 14.6642)"
                      fill="white"
                    />
                    <circle
                      cx="1.49642"
                      cy="14.6642"
                      r="1.49626"
                      transform="rotate(90 1.49642 14.6642)"
                      fill="white"
                    />
                    <circle
                      cx="40.9984"
                      cy="27.8302"
                      r="1.49626"
                      transform="rotate(90 40.9984 27.8302)"
                      fill="white"
                    />
                    <circle
                      cx="27.8304"
                      cy="27.8302"
                      r="1.49626"
                      transform="rotate(90 27.8304 27.8302)"
                      fill="white"
                    />
                    <circle
                      cx="14.6644"
                      cy="27.8302"
                      r="1.49626"
                      transform="rotate(90 14.6644 27.8302)"
                      fill="white"
                    />
                    <circle
                      cx="1.49642"
                      cy="27.8302"
                      r="1.49626"
                      transform="rotate(90 1.49642 27.8302)"
                      fill="white"
                    />
                    <circle
                      cx="40.9984"
                      cy="40.9982"
                      r="1.49626"
                      transform="rotate(90 40.9984 40.9982)"
                      fill="white"
                    />
                    <circle
                      cx="27.8304"
                      cy="40.9963"
                      r="1.49626"
                      transform="rotate(90 27.8304 40.9963)"
                      fill="white"
                    />
                    <circle
                      cx="14.6644"
                      cy="40.9982"
                      r="1.49626"
                      transform="rotate(90 14.6644 40.9982)"
                      fill="white"
                    />
                    <circle
                      cx="1.49642"
                      cy="40.9963"
                      r="1.49626"
                      transform="rotate(90 1.49642 40.9963)"
                      fill="white"
                    />
                    <circle
                      cx="40.9984"
                      cy="54.1642"
                      r="1.49626"
                      transform="rotate(90 40.9984 54.1642)"
                      fill="white"
                    />
                    <circle
                      cx="27.8304"
                      cy="54.1642"
                      r="1.49626"
                      transform="rotate(90 27.8304 54.1642)"
                      fill="white"
                    />
                    <circle
                      cx="14.6644"
                      cy="54.1642"
                      r="1.49626"
                      transform="rotate(90 14.6644 54.1642)"
                      fill="white"
                    />
                    <circle
                      cx="1.49642"
                      cy="54.1642"
                      r="1.49626"
                      transform="rotate(90 1.49642 54.1642)"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
            </section>
          </div>
          {/* FeatureSection*/}
          <div className="flex items-center justify-center h-90 mb-5    rounded  dark:bg-gray-800">
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
              <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
                Services
              </h2>
              <p className="mb-12 text-lg text-gray-500">
                Here is a few of the awesome Services we provide.
              </p>
              <div className="w-full">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                      <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            FingerID Development
                          </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                          ------------
                        </p>
                        <p className="mb-2 text-gray-600">
                          FingerID Development involves crafting decentralized
                          applications (dapps) tailored for secure
                          authentication and identity management. Leveraging
                          decentralized networks, FingerID merges smart
                          contracts with intuitive user interfaces.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="relative h-full ml-0 md:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                      <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Decentralized Identity Solutions
                          </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                          ------------
                        </p>
                        <p className="mb-2 text-gray-600">
                          Decentralized Identity Solutions redefine the
                          landscape of digital authentication, ensuring privacy
                          and security through innovative decentralized
                          frameworks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-5 sm:flex-row">
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                      <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Identity Verification
                          </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                          ------------
                        </p>
                        <p className="mb-2 text-gray-600">
                          Identity Verification processes are pivotal in
                          FingerID's ecosystem, guaranteeing the integrity and
                          authenticity of user identities within decentralized
                          networks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                      <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Biometric Authentication
                          </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                          ------------
                        </p>
                        <p className="mb-2 text-gray-600">
                          Biometric Authentication lies at the heart of
                          FingerID's technology, offering seamless and secure
                          access to decentralized applications through unique
                          biometric identifiers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="relative h-full ml-0 md:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                      <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                            Identity Protection
                          </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                          ------------
                        </p>
                        <p className="mb-2 text-gray-600">
                          Identity Protection measures within FingerID safeguard
                          user data against unauthorized access and ensure
                          privacy in decentralized environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* source:https://tailwind.besoeasy.com */}
          </div>
          {/* FeedBack*/}
          <div className="flex items-center justify-center h-90     rounded  dark:bg-gray-800">
            <section className="bg-white px-4 py-12 md:py-24">
              <div className="max-w-screen-xl mx-auto">
                <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
                  What Customer Are Saying
                </h2>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                  <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p className="font-bold uppercase">John Doe</p>
                    <p className="text-xl font-light italic text-gray-700">
                      I've experienced firsthand the convenience and security of
                      FingerID's technology. Their solutions offer peace of mind
                      in an increasingly digital world.
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p className="font-bold uppercase">Jane Smith</p>
                    <p className="text-xl font-light italic text-gray-700">
                      FingerID has truly impressed me! The attention to detail
                      in their solutions is outstanding. Looking forward to
                      witnessing their future innovations!
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p className="font-bold uppercase">Emily Johnson</p>
                    <p className="text-xl font-light italic text-gray-700">
                      FingerID's commitment to security and innovation is
                      unparalleled. Their dedication to protecting user
                      identities sets them apart in the industry
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="text-yellow-500 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*Footer*/}

          </div>
        </div>
    </>
  );
};

export default HomePage;
