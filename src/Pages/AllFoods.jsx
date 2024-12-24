import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsCard from './AllFoodsCard';
import PurchaseFoods from './PurchaseFoods';

const AllFoods = () => {
  const foods = useLoaderData();
  return (
    <div>
      <div
        className="relative w-full mb-5  h-[200px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/cTCcpBZ/DALL-E-2024-12-23-19-10-48-A-beautifully-styled-restaurant-themed-banner-background-image-with-a-war.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to All Foods Pages
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore The All Food And Purchase
          </p>
        </div>
      </div>
      <div className="w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {foods.map(food => (
          <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
