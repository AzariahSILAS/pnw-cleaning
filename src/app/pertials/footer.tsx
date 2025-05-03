import React from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-[#2C2A28]git  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-3 gap-y-16 gap-x-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src="logoLight.png"
              alt="Logo"
            />
            <p className="text-base leading-relaxed text-white mt-7">
            Experience the Difference of a Cleaner Workspace
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              {["Home","About","Services","Contact"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
            {/* <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
              <ul className="mt-6 space-y-4">
                {["Customer Support", "Privacy Policy"].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
        </div>

        <hr className="mt-16 mb-10 border-white" />
        <p className="text-sm text-center text-white">© Copyright 2021, All Rights Reserved by Azariah Silas</p>
      </div>
    </section>
  );
};


export default Footer;
