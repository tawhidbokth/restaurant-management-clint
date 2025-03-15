import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AouthContext } from '../Provider/AouthProvider';
import { useNavigate } from 'react-router-dom';

const AddFoods = () => {
  const { user } = useContext(AouthContext);
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null); // State to store the selected image file
  const [isUploading, setIsUploading] = useState(false); // State to handle upload loading state

  // Function to handle image file selection
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Function to upload image to Cloudinary
  const uploadImageToCloudinary = async file => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'food_image_upload'); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dntorxcm5/image/upload', // Replace with your Cloudinary cloud name
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url; // Return the uploaded image URL
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setIsUploading(true);

    // Upload the image first
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
      if (!imageUrl) {
        Swal.fire({
          icon: 'error',
          title: 'Image Upload Failed',
          text: 'Please try again.',
        });
        setIsUploading(false);
        return;
      }
    }

    // Prepare the form data
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.foodImage = imageUrl; // Replace the image URL with the uploaded one

    // Send the data to your backend
    fetch('https://restaurant-management-server-lilac.vercel.app/foods', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Food Has been added.',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/myfoods');
        }
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-8 mt-20 bg-gradient-to-r from-purple-50 to-blue-50 p-8 shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
        Add New Food
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            required
            placeholder="Enter food name"
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
        </div>

        {/* Food Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Image
          </label>
          <input
            type="file"
            name="foodImage"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
          {imageFile && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Food Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Category
          </label>
          <select
            name="foodCategory"
            required
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
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
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            required
            placeholder="Enter quantity"
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            required
            placeholder="Enter price"
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
        </div>

        {/* Food Origin */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Origin (Country)
          </label>
          <input
            type="text"
            name="foodOrigin"
            required
            placeholder="Enter food origin"
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            name="description"
            required
            placeholder="Enter food description"
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
          />
        </div>

        {/* Add By (Read-Only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            HR Name
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            defaultValue={user.displayName}
            readOnly
            className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-100"
            required
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            HR Email
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR Email"
            className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-100"
            readOnly
            required
          />
        </div>

        {/* Add Item Button */}
        <button
          type="submit"
          disabled={isUploading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300"
        >
          {isUploading ? 'Uploading...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
