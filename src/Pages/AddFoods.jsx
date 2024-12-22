import React from 'react';

const AddFoods = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const from = e.target;
    console.log(from);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium">Food Name</label>
          <input
            type="text"
            name="name"
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
            name="image"
            required
            placeholder="Enter food image URL"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Food Category */}
        <div>
          <label className="block text-sm font-medium">Food Category</label>
          <select
            name="category"
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
            name="origin"
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
            required
            placeholder="Enter food description"
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Add By (Read-Only) */}
        <div>
          <label className="block text-sm font-medium">Added By</label>
          <input
            type="text"
            value="im tawhid "
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        {/* Add Item Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
