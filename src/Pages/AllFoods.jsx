import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
  const foods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const handleSearchChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = foods.filter(food =>
      food.foodName.toLowerCase().includes(query)
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative z-0 w-full max-w-7xl mx-auto mb-5 h-[200px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/cTCcpBZ/DALL-E-2024-12-23-19-10-48-A-beautifully-styled-restaurant-themed-banner-background-image-with-a-war.webp')",
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

      {/* Search Section */}
      <div className="max-w-7xl mx-auto p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by food name..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {filteredFoods.length > 0 ? (
          filteredFoods.map(food => (
            <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No foods found matching "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
