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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = parseInt(form.quantity.value);
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const buyingDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    // Quantity validation
    if (quantity > food.quantity) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `You cannot purchase more than ${food.quantity} items!`,
      });
      return;
    }

    // Owner restriction validation
    if (food.hr_email === user.email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cannot purchase your own food item!',
      });
      return;
    }

    const foodPurchase = {
      food_id: id,
      foodName,
      price,
      quantity,
      userName,
      userEmail,
      buyingDate,
    };

    fetch(
      'https://restaurant-management-server-lilac.vercel.app/foods-purchase',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(foodPurchase),
      }
    )
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
    <div className="mb-10 mt-10">
      <section className="text-gray-600 body-font overflow-hidden h-[750px]">
        <div className="container px-2 py-4 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={food.foodImage}
              alt={food.foodName}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {food.foodName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Food Name
                  </label>
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
                  <label className="block text-gray-700 font-medium">
                    Price
                  </label>
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
                  <label className="block text-gray-700 font-medium">
                    Available Quantity
                  </label>
                  <p className="w-full p-2 border rounded-lg bg-gray-100">
                    {food.quantity}
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Buyer Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={user.displayName}
                    readOnly
                    className="w-full p-2 border rounded-lg bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Buyer Email
                  </label>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseFoods;
