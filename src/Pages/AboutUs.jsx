import React from 'react';

const AboutUs = () => {
  return (
    <section className="min-h-screen py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-2 text-gray-600">
            Serving passion on every plate since 2010.
          </p>
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://i.ibb.co.com/v4wK5ZF6/re.jpg"
              alt="About Us"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              From a small family-run kitchen to one of the city's favorite
              spots, our journey has always revolved around one thing: love for
              food. We bring traditional flavors with a modern twist, using the
              freshest ingredients and heartfelt service.
            </p>
            <p className="text-gray-700">
              Whether it’s a romantic dinner or a weekend hangout, our space is
              your cozy culinary home. Come join us and experience what makes
              our restaurant truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
