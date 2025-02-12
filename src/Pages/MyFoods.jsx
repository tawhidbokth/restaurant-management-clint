import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AouthContext } from '../Provider/AouthProvider';
import { GrUpdate } from 'react-icons/gr';
const MyFoods = () => {
  const [foods, setfoods] = useState([]);
  const { user } = useContext(AouthContext);
  useEffect(() => {
    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods?email=${user.email}`
    )
      .then(res => res.json())
      .then(data => setfoods(data));
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          {/* Head */}
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-3 border border-gray-300">#</th>
              <th className="p-3 border border-gray-300">Food Image</th>
              <th className="p-3 border border-gray-300">Food Name</th>
              <th className="p-3 border border-gray-300">Food Price</th>
              <th className="p-3 border border-gray-300">Food Update</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id} className="text-center hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">
                  <div className="avatar flex justify-center">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food.foodImage} alt={food.foodName} />
                    </div>
                  </div>
                </td>
                <td className="p-3 border border-gray-300">{food.foodName}</td>
                <td className="p-3 border border-gray-300">${food.price}</td>
                <td className="p-3 border border-gray-300">
                  <Link to={`/update/${food._id}`}>
                    <button className="btn btn-link text-blue-500 flex items-center justify-center gap-2">
                      <GrUpdate /> Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoods;
