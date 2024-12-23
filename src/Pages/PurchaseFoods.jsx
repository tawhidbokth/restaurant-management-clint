import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AouthContext } from '../Provider/AouthProvider';

const PurchaseFoods = () => {
  const { user } = useContext(AouthContext);
  console.log(user);
  const food = useLoaderData();

  const handleSubmit = e => {
    e.preventDefault();
    const purchaseData = {
      ...formData,
      buyerName: user.displayName,
      buyerEmail: user.email,
      buyingDate: Date.now(),
    };

    // Send `purchaseData` to the database or API
    console.log(purchaseData);
    alert('Purchase Successful!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Purchase Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={food.foodName}
            readOnly
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={food.price}
            readOnly
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Buyer Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseFoods;
