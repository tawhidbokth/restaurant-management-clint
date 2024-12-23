import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
  const foods = useLoaderData();
  return (
    <div>
      <div className="w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {foods.map(food => (
          <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
