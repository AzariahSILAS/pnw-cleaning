import React from "react";


const Hero = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
              PNW Cleaning
                
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
              We clean your work space with the quality and precision expected in a home. 
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                >
                  Start exploring
                </a>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                className="w-full"
                src="heroImg.jpg"
                alt="Hero illustration"
                width={500} height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
