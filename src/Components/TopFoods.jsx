import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Provider/ThemeProvider';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('http://localhost:5000/foods?limit=6')
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
      <h2
        className={` text-3xl font-bold mb-8 text-center text-gray-800 ${
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
        } `}
      >
        Top Foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map(food => (
          <div
            key={food._id}
            className={` rounded-lg shadow-lg p-4 hover:shadow-2xl transition ${
              theme === 'light'
                ? 'bg-white text-black'
                : 'bg-gray-900 text-white'
            } `}
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3
                className={`text-xl font-bold mb-2   ${
                  theme === 'light' ? ' text-black' : ' text-white'
                } `}
              >
                {food.foodName}
              </h3>
              <p
                className={` font-bold mb-2   ${
                  theme === 'light' ? ' text-black' : ' text-white'
                } `}
              >
                Price: ${food.price}
              </p>
              <p
                className={` font-bold mb-2   ${
                  theme === 'light' ? ' text-black' : ' text-white'
                } `}
              >
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
