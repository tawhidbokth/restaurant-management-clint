import React, { useContext, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodUpdate = ({ isOpen, onClose }) => {
  const { user } = useContext(AouthContext);
  const navigate = useNavigate();
  const food = useLoaderData(); // Get food data from the loader

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        `https://restaurant-management-server-lilac.vercel.app/foods/${food._id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(initialData),
        }
      );
      const data = await response.json();

      if (data.modifiedCount) {
        Swal.fire({
          title: 'Success!',
          position: 'top-center',
          text: 'Food updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        navigate('/myfoods'); // Redirect after successful update
      }
    } catch (error) {
      console.error('Error updating food:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update food',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Update Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            defaultValue={food.foodName}
            required
            placeholder="Enter food name"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block text-sm font-medium">Food Image (URL)</label>
          <input
            type="url"
            name="foodImage"
            defaultValue={food.foodImage}
            required
            placeholder="Enter food image URL"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Food Category */}
        <div>
          <label className="block text-sm font-medium">Food Category</label>
          <select
            name="foodCategory"
            defaultValue={food.foodCategory}
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

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={food.quantity}
            required
            placeholder="Enter quantity"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            defaultValue={food.price}
            required
            placeholder="Enter price"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Food Origin */}
        <div>
          <label className="block text-sm font-medium">
            Food Origin (Country)
          </label>
          <input
            type="text"
            name="foodOrigin"
            defaultValue={food.foodOrigin}
            required
            placeholder="Enter food origin"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium">Short Description</label>
          <textarea
            name="description"
            defaultValue={food.description}
            required
            placeholder="Enter food description"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Add By (Read-Only) */}
        <div>
          <label className="block text-sm font-medium">HR Name</label>
          <input
            type="text"
            name="hr_name"
            defaultValue={user.displayName}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
            required
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block text-sm font-medium">HR Email</label>
          <input
            type="text"
            name="hr_email"
            defaultValue={user?.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FoodUpdate;
