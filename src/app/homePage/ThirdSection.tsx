const WhyChooseUs = () => {
    return (
      <div className="w-full mx-auto px-10 lg:px-0 py-12 ">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Businesses Choose PNW Cleaning.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto place-items-center ">
          <div className="flex items-center justify-start w-[255]  gap-4 ">
            <img src="workplace.gif" alt="Icon 1" className="w-10 h-10" />
            <p className="text-gray-700">
            Home-quality precision</p>
          </div>
          <div className="flex items-center justify-start w-[255] gap-4">
            <img src="group.gif" alt="Icon 2" className="w-10 h-10" />
            <p className="text-gray-700">Experienced & vetted team</p>
          </div>
          <div className="flex items-center justify-start w-[255] gap-4">
            <img src="money-bag.gif" alt="Icon 3" className="w-10 h-10" />
            <p className="text-gray-700">Affordable, custom plans</p>
          </div>
          <div className="flex items-center justify-start w-[255] gap-4">
            <img src="wait.gif" alt="Icon 4" className="w-10 h-10" />
            <p className="text-gray-700">Flexible scheduling</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;
  