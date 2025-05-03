'use client'
import Image from 'next/image';

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <header className="pb-6 bg-[#2B2A2A] lg:pb-0">

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Desktop/Nav */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
            <Image src="/wait.gif" alt="PWN Cleaning Logo" width={60} height={60} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden "
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {['Home', 'Services', 'Contact','About' ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Get estimate
          </a>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="pt-4 pb-6 mt-4 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {['Home', 'Services', 'Contact','About' ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get estimate
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
