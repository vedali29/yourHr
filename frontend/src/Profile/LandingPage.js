import React from 'react';
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="py-2 bg-gray-100 text-gray-900 min-h-screen">
      <header className="px-5 sm:px-10 md:px-10 md:py-5 lg:px-20 flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-32"
          />
        </div>
        <div>
          <button className="md:hidden">
            <svg
              className="cursor-pointer text-gray-700 hover:text-gray-900 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:justify-between">
            <a
              href="#"
              className="transition-all duration-100 ease-in-out pb-1 border-b-2 text-indigo-500 border-transparent hover:border-indigo-300 hover:text-gray-600 md:mr-8 text-lg md:text-sm font-bold tracking-wide my-4 md:my-0"
            >
              Blog
            </a>
            <a
              onClick={() => navigate('/Login')}
              className="transition-all duration-100 ease-in-out pb-1 border-b-2 text-indigo-500 border-transparent hover:border-indigo-300 hover:text-indigo-600 md:mr-8 text-lg md:text-sm font-bold tracking-wide my-4 md:my-0"
            >
              Login
            </a>
            <button className="border border-transparent rounded font-semibold tracking-wide text-lg md:text-sm px-5 py-3 md:py-2 focus:outline-none focus:shadow-outline bg-indigo-600 text-gray-100 hover:bg-indigo-800 hover:text-gray-200 transition-all duration-300 ease-in-out my-4 md:my-0 w-full md:w-auto"
             onClick={() => navigate('/CreateAccount')}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main>
        <div id="hero" className="pt-5 lg:flex items-center">
          <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
            <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                Get Hired 
              </h1>
              <p className="mt-4 xl:mt-2">
                World Class Hiring Opportunities, just for you on contract, full-time or part-time, whatever you need.
              </p>
            </div>

            <div className="flex-1">
              <div className="relative mt-4 md:mt-0 lg:mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    className="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Type (e.g junior, senior)"
                />
              </div>
              <div className="relative mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    className="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Mountain View, California"
                />
              </div>
              <div>
                
                <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200"
                onClick={() => navigate('/SignUp')}
                >
                  Find Your Job
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full flex-1 lg:mt-0">
            <div></div>
            <img
              src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
              alt="Designers"
            />
          </div>
        </div>

        <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img
              className="mx-auto"
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"
              alt="Companies"
            />
          </div>
        </div>

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100" id="features">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">Features</h3>

            <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
              <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-indigo-200 rounded-lg">
                  <svg
                    className="text-indigo-500 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">Amazing People</div>
                <div className="text-sm">
                  We guarantee that every designer you ever work with will be an awesome member for your team. We conduct
                  personal interview with every designer to ensure that we only get the best.
                </div>
              </div>

              <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-green-200 rounded-lg">
                  <svg
                    className="text-green-500 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-6l-4 8-4-16-4 8H2" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">Best Rates</div>
                <div className="text-sm">
                  Our rates are competitive, and we always work within your budget to bring the best talent to your team.
                </div>
              </div>

              <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-red-200 rounded-lg">
                  <svg
                    className="text-red-500 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">Abuse Protection</div>
                <div className="text-sm">
                  We conduct audits regularly to ensure that every designer is fairly compensated for their work. Our
                  legal team is here to protect you and your team.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8" id="popular">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">Popular Candidates</h3>

            <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
              <div className="w-full max-w-sm mt-6 bg-gray-100 rounded shadow-lg p-8 lg:p-4 lg:mx-4 xl:p-8">
                <div className="flex">
                  <div className="w-16 h-16">
                    <img
                      className="rounded-full border border-gray-300 shadow-sm"
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="Jane Doe"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">Jane Doe</div>
                    <div className="text-sm text-gray-600">Mountain View, California</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">Experience: 5 Years</div>
                <div className="mt-1 text-sm text-gray-700">Employment: Full-time</div>
                <div className="mt-1 text-xs text-gray-500">Got Hired 10 minutes ago</div>
              </div>

              <div className="w-full max-w-sm mt-6 bg-gray-100 rounded shadow-lg p-8 lg:p-4 lg:mx-4 xl:p-8">
                <div className="flex">
                  <div className="w-16 h-16">
                    <img
                      className="rounded-full border border-gray-300 shadow-sm"
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt="John Smith"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">John Smith</div>
                    <div className="text-sm text-gray-600">San Francisco, California</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">Experience: 8 Years</div>
                <div className="mt-1 text-sm text-gray-700">Employment: Part-time</div>
                <div className="mt-1 text-xs text-gray-500">Got Hired 30 minutes ago</div>
              </div>

              <div className="w-full max-w-sm mt-6 bg-gray-100 rounded shadow-lg p-8 lg:p-4 lg:mx-4 xl:p-8">
                <div className="flex">
                  <div className="w-16 h-16">
                    <img
                      className="rounded-full border border-gray-300 shadow-sm"
                      src="https://randomuser.me/api/portraits/women/3.jpg"
                      alt="Emily White"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">Emily White</div>
                    <div className="text-sm text-gray-600">New York, New York</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">Experience: 3 Years</div>
                <div className="mt-1 text-sm text-gray-700">Employment: Freelance</div>
                <div className="mt-1 text-xs text-gray-500">Got Hired 1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>
       {/* Footer Section */}
       <footer className="bg-gray-800 text-gray-100">
        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-12 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Column 1 */}
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <img
                src={logo}
                alt="Logo"
                className="w-48 mb-4"
              />
              <p className="text-gray-400 text-sm">
                We provide the best Job as per your Preference. Whatever your needs, we have you covered.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-400">© 2024 YourCompany. All rights reserved.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="lg:w-1/3">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.66 8.83 8.44 9.79v-6.91H8.46v-2.88h2.98V9.33c0-2.93 1.75-4.55 4.42-4.55 1.28 0 2.62.22 2.62.22v2.89h-1.48c-1.46 0-1.92.91-1.92 1.83v2.13h3.28l-.52 2.88h-2.76V22C18.34 20.83 22 16.84 22 12c0-5.52-4.48-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.37 8.09c.01.14.01.29.01.43 0 4.42-3.37 9.52-9.52 9.52A9.5 9.5 0 0 1 2 17.6c.37.04.75.06 1.14.06 3.14 0 6.03-1.08 8.32-2.9a3.37 3.37 0 0 1-3.14-2.34c.22.04.44.07.67.07.32 0 .63-.04.93-.11a3.35 3.35 0 0 1-2.7-3.3v-.04c.45.25.96.4 1.5.42a3.35 3.35 0 0 1-1.5-2.79c0-.62.17-1.2.47-1.7a9.52 9.52 0 0 0 6.9 3.5c-.06-.25-.09-.52-.09-.79a3.35 3.35 0 0 1 5.8-2.3 6.64 6.64 0 0 0 2.13-.81 3.34 3.34 0 0 1-1.47 1.85c.9-.1 1.75-.34 2.54-.69a6.94 6.94 0 0 1-1.66 1.72z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.01 5.5H5.01A3.51 3.51 0 0 0 1.5 9v6a3.51 3.51 0 0 0 3.51 3.5h14a3.51 3.51 0 0 0 3.5-3.5V9a3.51 3.51 0 0 0-3.5-3.5zM9.25 15.21V8.79l5.5 3.21-5.5 3.21z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">
                  Stay connected with us through our social media channels and get the latest updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
