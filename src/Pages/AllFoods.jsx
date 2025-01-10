import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
  const foods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [isGridView, setIsGridView] = useState(true); // For layout toggle
  const [isAscending, setIsAscending] = useState(true); // For sorting order

  // Handle search
  const handleSearchChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = foods.filter(food =>
      food.foodName.toLowerCase().includes(query)
    );
    setFilteredFoods(filtered);
  };

  // Handle sorting
  const handleSort = () => {
    const sortedFoods = [...filteredFoods].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setFilteredFoods(sortedFoods);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  // Handle layout toggle
  const toggleLayout = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative mt-16 z-0 w-full max-w-7xl mx-auto mb-5 h-[200px] bg-cover bg-center"
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
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by food name..."
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Sort by Price ({isAscending ? 'Ascending' : 'Descending'})
        </button>
        <button
          onClick={toggleLayout}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Toggle Layout ({isGridView ? 'Grid' : 'List'})
        </button>
      </div>

      {/* Foods Section */}
      <div
        className={`max-w-7xl mx-auto p-4 ${
          isGridView
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
            : 'flex flex-col gap-4'
        }`}
      >
        {filteredFoods.length > 0 ? (
          filteredFoods.map(food => (
            <AllFoodsCard
              key={food._id}
              food={food}
              isGridView={isGridView}
            ></AllFoodsCard>
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
