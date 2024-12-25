import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';
import moment from 'moment';
import { AouthContext } from './../Provider/AouthProvider';

const PurchaseFoods = () => {
  const { id } = useParams();
  const { user } = useContext(AouthContext);
  const food = useLoaderData();
  const navigate = useNavigate();
  console.log('amar user', user);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const buyingDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    const foodPurchase = {
      food_id: id,
      foodName,
      price,
      quantity,
      userName,
      userEmail,
      buyingDate,
    };

    fetch('http://localhost:5000/foods-purchase', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(foodPurchase),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your purchase was successful!',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate('/myorder');
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong with the purchase!',
        });
      });
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
            name="userName"
            defaultValue={user.displayName}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Buyer Email</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user.email}
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
