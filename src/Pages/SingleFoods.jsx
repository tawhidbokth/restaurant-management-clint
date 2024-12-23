import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleFoodPage = () => {
  const [purchaseCount, setPurchaseCount] = useState(0);
  const food = useLoaderData();
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-[100%] h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{food.foodName}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {food.foodCategory}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Origin:</strong> {food.foodOrigin}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Price:</strong> ${food.price}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Description:</strong> {food.description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold text-gray-800">
          Purchase Count: {purchaseCount}
        </p>

        <Link to={`/purchase/${food._id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFoodPage;
