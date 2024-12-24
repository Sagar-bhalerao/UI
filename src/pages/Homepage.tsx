const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 transition-colors duration-300">
      {/* <!-- Slider --> */}
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0", "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }'
        className="relative">
        <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                 <img  className="h-full w-full object-cover rounded-md" src="https://www.wavemaker.com/wp-content/uploads/2024/01/Blog-187.png" alt="ui" />
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                <img src="https://www.iotworlds.com/wp-content/uploads/2023/01/iotworlds-UI-UX-designer.jpg" alt="ui" />
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                 <img src="https://www.topdevelopers.co/blog/wp-content/uploads/User-Interface-Design-Guidelines.jpg" alt="ui" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
      </div>
      {/* <!-- End Slider --> */}

      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10  mx-auto">
        {/* <!-- Card --> */}
        <div className=" shadow-xl  border-2 border-transparent dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Total users
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                    The number of daily users
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                72,540
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">
                  1.7%
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className=" border-2 border-transparent dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  shadow-xl rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Sessions
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                29.4%
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className=" border-2 border-transparent dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  shadow-xl rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Avg. Click Rate
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                56.8%
              </h3>
              <span className="flex items-center gap-x-1 text-red-600">
                <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span className="inline-block text-sm">
                  1.7%
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className=" border-2 border-transparent dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  shadow-xl rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Pageviews
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                92,913
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}

    </div>
  );
};

export default Homepage;
