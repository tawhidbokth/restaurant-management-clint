import React, { useContext, useEffect, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import { GrUpdate } from 'react-icons/gr';
import { FiDelete } from 'react-icons/fi';
import Swal from 'sweetalert2';

const MyFoods = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AouthContext);

  // Fetch Foods
  useEffect(() => {
    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods?email=${user.email}`
    )
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false);
      });
  }, [user.email]);

  // Handle Update Food
  const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;
    const updatedData = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      foodCategory: form.foodCategory.value,
      quantity: parseInt(form.quantity.value),
      price: parseFloat(form.price.value),
      foodOrigin: form.foodOrigin.value,
      description: form.description.value,
      hr_name: user.displayName,
      hr_email: user.email,
    };

    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods/${selectedFood._id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Food updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          // Update the UI without a full reload
          setFoods(
            foods.map(food =>
              food._id === selectedFood._id ? { ...food, ...updatedData } : food
            )
          );

          setIsModalOpen(false);
          setSelectedFood(null);
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (foods.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 text-lg">No food items found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12">
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Food Image</th>
              <th className="p-4 text-left">Food Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {foods.map((food, index) => (
              <tr
                key={food._id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="p-4 border-b">{index + 1}</td>
                <td className="p-4 border-b">
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="h-12 w-12 object-cover rounded-lg"
                  />
                </td>
                <td className="p-4 border-b">{food.foodName}</td>
                <td className="p-4 border-b">${food.price}</td>
                <td className="p-4 border-b">{food.quantity}</td>
                <td className="p-4 border-b">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedFood(food);
                        setIsModalOpen(true);
                      }}
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
                    >
                      <GrUpdate className="inline-block" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedFood(food);
                        setIsModalOpen(true);
                      }}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                    >
                      <FiDelete className="inline-block" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Update Food
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Name
                </label>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={selectedFood.foodName}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Image (URL)
                </label>
                <input
                  type="url"
                  name="foodImage"
                  defaultValue={selectedFood.foodImage}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Category
                </label>
                <select
                  name="foodCategory"
                  defaultValue={selectedFood.foodCategory}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="Starter">Starter</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Beverage">Beverage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={selectedFood.quantity}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedFood.price}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Origin
                </label>
                <input
                  type="text"
                  name="foodOrigin"
                  defaultValue={selectedFood.foodOrigin}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedFood.description}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition-all duration-200"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFoods;
