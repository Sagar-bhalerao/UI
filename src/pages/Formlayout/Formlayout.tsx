import Breadcrumb from "../../components/Breadcrumb";

const Formlayout = () => {
  return (
    <>
    <Breadcrumb title = "Form-layout"/>
      <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 transition-colors duration-300">
        <div className="">
         {/* Login */}

          <div>
            {/* <!-- Hero --> */}
<div className="relative overflow-hidden">
  <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
      {/* <!-- Title --> */}
      <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
       Sign In To Explore Seamless <span className="text-slate-900 dark:text-white">component</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 dark:text-neutral-500">
        Built on standard web technology, teams use Preline to build beautiful cross-platform hybrid apps in a fraction of the time.
      </p>
      {/* <!-- End Title --> */}

      <div className="mt-8 grid">
        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
          <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
          </svg>
          Log In with Google
        </button>
      </div>

      <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">Or</div>

      {/* <!-- Form --> */}
      <form>       

        <div className="mb-4">
          <label htmlFor="hs-hero-email-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
          <input type="email" id="hs-hero-email-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email address"/>
        </div>

        <div className="mb-4">
          <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
          <input type="email" id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Password"/>
        </div>

        <div className="grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
        </div>
      </form>
      {/* <!-- End Form --> */}
    </div>
  </div>

  <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover"></div>
  {/* <!-- End Col --> */}
</div>
{/* <!-- End Hero --> */}
         </div>

          {/* Signup */}
          <div>
            {/* <!-- Hero --> */}
            <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Grid --> */}
                <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                     A : A vision for 2025
                    </p>

                    {/* <!-- Title --> */}
                    <div className="mt-4 md:mb-12 max-w-2xl">
                      <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                        Fully customizable rules to match your unique needs
                      </h1>
                      <p className="text-gray-600 dark:text-neutral-400">
                        We provide you with a test account that can be set up in
                        seconds. Our main focus is getting responses to you as
                        soon as we can.
                      </p>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Blockquote --> */}
                    <blockquote className="hidden md:block relative max-w-sm">
                      <svg
                        className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                          fill="currentColor"
                        />
                      </svg>
                  
                    </blockquote>
                    {/* <!-- End Blockquote --> */}
                  </div>
                  {/* <!-- End Col --> */}

                  <div>
                    {/* <!-- Form --> */}
                    <form>
                      <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                        {/* <!-- Card --> */}
                        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                          <div className="text-center">
                          <h1 className="inline-block text-2xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                    Register Here
                    </h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                              Already have an account?
                              <a
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                href="#"
                              >
                                Sign in here
                              </a>
                            </p>
                          </div>

                          <div className="mt-5">
                            <button
                              type="button"
                              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                              <svg
                                className="w-4 h-auto"
                                width="46"
                                height="47"
                                viewBox="0 0 46 47"
                                fill="none"
                              >
                                <path
                                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                  fill="#4285F4"
                                ></path>
                                <path
                                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                  fill="#34A853"
                                ></path>
                                <path
                                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                  fill="#FBBC05"
                                ></path>
                                <path
                                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                  fill="#EB4335"
                                ></path>
                              </svg>
                              Sign up with Google
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                              Or
                            </div>

                            {/* <!-- Grid --> */}
                            <div className="grid grid-cols-2 gap-4">
                              {/* <!-- Input Group --> */}
                              <div>
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="text"
                                    id="hs-hero-signup-form-floating-input-first-name"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="John"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-first-name"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                                  >
                                    First name
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}
                              </div>
                              {/* <!-- End Input Group --> */}

                              {/* <!-- Input Group --> */}
                              <div>
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="text"
                                    id="hs-hero-signup-form-floating-input-last-name"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="Doe"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-last-name"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 "
                                  >
                                    Last name
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}
                              </div>
                              {/* <!-- End Input Group --> */}

                              {/* <!-- Input Group --> */}
                              <div>
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="email"
                                    id="hs-hero-signup-form-floating-input-email"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="you@email.com"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-email"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                                  >
                                    Email
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}
                              </div>
                              {/* <!-- End Input Group --> */}

                              {/* <!-- Input Group --> */}
                              <div>
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="text"
                                    id="hs-hero-signup-form-floating-input-company-name"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="Preline"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-company-name"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                                  >
                                    Company name
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}
                              </div>
                              {/* <!-- End Input Group --> */}

                              {/* <!-- Input Group --> */}
                              <div className="relative col-span-full">
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="password"
                                    id="hs-hero-signup-form-floating-input-new-password"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="********"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-new-password"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                                  >
                                    New password
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}

                            
                              </div>
                              {/* <!-- End Input Group --> */}

                              {/* <!-- Input Group --> */}
                              <div className="col-span-full">
                                {/* <!-- Floating Input --> */}
                                <div className="relative">
                                  <input
                                    type="password"
                                    id="hs-hero-signup-form-floating-input-current-password"
                                    className="peer bg-slate-100  p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                    placeholder="********"
                                  />
                                  <label
                                    htmlFor="hs-hero-signup-form-floating-input-current-password"
                                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                                  >
                                    Current password
                                  </label>
                                </div>
                                {/* <!-- End Floating Input --> */}
                              </div>
                              {/* <!-- End Input Group --> */}
                            </div>
                            {/* <!-- End Grid --> */}

                            {/* <!-- Checkbox --> */}
                            <div className="mt-5 flex items-center">
                              <div className="flex">
                                <input
                                  id="remember-me"
                                  name="remember-me"
                                  type="checkbox"
                                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                />
                              </div>
                              <div className="ms-3">
                                <label
                                  htmlFor="remember-me"
                                  className="text-sm dark:text-white"
                                >
                                  I accept the{" "}
                                  <a
                                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                    href="#"
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                            {/* <!-- End Checkbox --> */}

                            <div className="mt-5">
                              <button
                                type="submit"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                              >
                                Get started
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Card --> */}
                      </div>
                    </form>
                    {/* <!-- End Form --> */}
                  </div>
                  {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
           
           
              </div>
              {/* <!-- End Clients Section --> */}
            </div>
            {/* <!-- End Hero --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formlayout;
