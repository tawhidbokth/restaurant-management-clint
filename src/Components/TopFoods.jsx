import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://restaurant-management-server-lilac.vercel.app/foods?limit=8')
      .then(res => res.json())
      .then(data => {
        const sortedFoods = data.sort(
          (a, b) => b.purchaseCount - a.purchaseCount
        );
        setFoods(sortedFoods);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className={'text-3xl font-bold mb-8 text-center '}>Top Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map(food => (
          <div
            key={food._id}
            className={'rounded-lg shadow-lg p-4 hover:shadow-2xl transition'}
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className={'text-xl font-bold mb-2 '}>{food.foodName}</h3>
              <p className={'font-bold mb-2 '}>Price: ${food.price}</p>
              <p className={' font-bold mb-2 '}>
                Purchase Count: {food.purchaseCount}
              </p>
              <Link to={`/foods/${food._id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to={'/allfoods'}>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
