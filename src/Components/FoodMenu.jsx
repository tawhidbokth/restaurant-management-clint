import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../Provider/ThemeProvider';

const FoodMenu = () => {
  const [foods, setFoods] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <section
      id="menu"
      className={`  py-16 bg-gray-50 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      } `}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header Section */}
        <h3 className="text-orange-500 text-lg font-semibold">
          Corporate Applications
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-6">Our Food Menu</h2>
        <p className="text-gray-600 mb-6">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Beverage', 'Breakfast', 'Dinner', 'Lunch', 'Party'].map(
            category => (
              <button
                key={category}
                className="px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition"
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {foods.map(food => (
            <motion.div
              key={food._id}
              className="flex items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: food.id * 0.1 }}
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover mr-4"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{food.foodName}</h4>

                <p className="text-sm text-gray-500 hidden md:block">
                  {food.description}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-orange-500 font-bold">
                    ${food.price}
                  </span>
                  {food.discountPrice && (
                    <span className="line-through text-gray-400">
                      ${food.discountPrice}
                    </span>
                  )}
                </div>
              </div>
              {/* Star Icon */}
              <span className="text-orange-500 text-lg font-bold ml-4">★</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
