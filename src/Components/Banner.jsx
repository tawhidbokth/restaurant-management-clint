import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div
        className="relative mt-12  z-0 w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/cTCcpBZ/DALL-E-2024-12-23-19-10-48-A-beautifully-styled-restaurant-themed-banner-background-image-with-a-war.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Restaurant
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience the taste of luxury and comfort
          </p>
          <Link to={'/allfoods'}>
            <p className="px-6 py-3 bg-orange-400 hover:bg-red-700 text-white font-semibold rounded-lg">
              All Foods
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
