import React, { useContext, useEffect, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';
import { FiDelete } from 'react-icons/fi';

const MyFoods = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AouthContext);

  // Fetch Foods
  useEffect(() => {
    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods?email=${user.email}`
    )
      .then(res => res.json())
      .then(data => setFoods(data));
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

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-3 border border-gray-300">#</th>
              <th className="p-3 border border-gray-300">Food Image</th>
              <th className="p-3 border border-gray-300">Food Name</th>
              <th className="p-3 border border-gray-300">Price</th>
              <th className="p-3 border border-gray-300">Quantity</th>
              <th className="p-3 border border-gray-300">Update</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id} className="text-center hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 border border-gray-300">{food.foodName}</td>
                <td className="p-3 border border-gray-300">${food.price}</td>
                <td className="p-3 border border-gray-300">${food.quantity}</td>
                <td className="p-3 border border-gray-300">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedFood(food);
                        setIsModalOpen(true);
                      }}
                      className="btn btn-link text-2xl text-green-500 flex items-center justify-center gap-2"
                    >
                      <GrUpdate />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedFood(food);
                        setIsModalOpen(true);
                      }}
                      className="btn btn-link text-2xl text-red-500 flex items-center justify-center gap-2"
                    >
                      <FiDelete />
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
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h2 className="text-2xl font-bold text-center mb-4">Update Food</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Food Name</label>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={selectedFood.foodName}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Food Image (URL)
                </label>
                <input
                  type="url"
                  name="foodImage"
                  defaultValue={selectedFood.foodImage}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Food Category
                </label>
                <select
                  name="foodCategory"
                  defaultValue={selectedFood.foodCategory}
                  required
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select category</option>
                  <option value="Starter">Starter</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Beverage">Beverage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={selectedFood.quantity}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedFood.price}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Food Origin</label>
                <input
                  type="text"
                  name="foodOrigin"
                  defaultValue={selectedFood.foodOrigin}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedFood.description}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-400 text-white py-2 mt-2 rounded hover:bg-gray-500"
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
