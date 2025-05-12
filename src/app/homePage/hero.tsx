"use client"
import React from "react";
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Only run on client
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};


const Hero = () => {

   const width = useWindowWidth();

  if (width === null) return null; // Avoid rendering on server

  const backgroundImage =
    width >= 983
      ? "url('headerImg-small.jpg')" // For large screens
      : "url('headerImgMobile.jpg')"; // For smaller screens

  return (
    <section
  className="w-full min-h-[504px] bg-cover bg-center flex items-center   " 
  style={{ backgroundImage }}
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
