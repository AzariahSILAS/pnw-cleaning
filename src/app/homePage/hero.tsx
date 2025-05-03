import React from "react";


const Hero = () => {
  return (
    <section
  className="w-full min-h-[504px] bg-cover bg-center flex items-center   "
  style={{ backgroundImage: "url('headerImg.jpg')" }}
>
  <div className="px-4 mx-auto w-7xl sm:px-6 lg:px-8 flex lg:justify-start sm:justify-center ">
    <div className="bg-[rgba(0,0,0,0.72)] p-8 rounded-xl text-left text-white ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">PWN Cleaning</h1>
      <p className="text-lg md:text-xl">
        Where Work Feels Like Home — Clean, Comfortable, and Cared For.
      </p>
    </div>
  </div>
</section>

  );
};

export default Hero;
