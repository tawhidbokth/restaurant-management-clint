import React from 'react';

const AllFoodsCard = ({ food }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <img
        className="rounded-t-lg h-48 w-full object-cover"
        src={food.foodImage}
        alt={food.foodName}
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-800">{food.foodName}</h5>
        <p className="text-gray-600 mb-3">Category: {food.foodCategory}</p>
        <p className="text-gray-600 mb-3">Price: ${food.price}</p>
        <p className="text-gray-600 mb-3">Quantity: {food.quantity}</p>
        <p className="text-gray-600 mb-3">Origin: {food.foodOrigin}</p>
        <p className="text-gray-600 text-sm mb-4">
          {food.description.slice(0, 60)}...
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default AllFoodsCard;
