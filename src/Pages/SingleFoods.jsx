import React, { useState, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AouthContext } from '../Provider/AouthProvider';
import moment from 'moment';
import Swal from 'sweetalert2';

const SingleFoodPage = () => {
  const { user } = useContext(AouthContext);
  const food = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const totalPrice = food.price * quantity;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = food.foodName;
    const price = food.price;
    const quantity = parseInt(form.quantity.value);
    const location = form.location.value;
    const userName = user.displayName;
    const userEmail = user.email;
    const pogress = 'panding';
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
      food_id: food._id,
      foodName,
      foodImage: food.foodImage,
      price,
      quantity,
      pogress,
      location,
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
            navigate('/dashboard/myorder');
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
    <div>
      {/* Food Details Card */}
      <div className="max-w-4xl mt-12 mx-auto p-6 bg-white shadow-2xl rounded-2xl transform transition-all hover:scale-105 duration-300">
        {/* Flex container for image and details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="flex-1 overflow-hidden rounded-lg">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-72 md:h-96 object-cover rounded-lg transform transition-all hover:scale-110 duration-500"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {food.foodName}
              </h1>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Category:</strong> {food.foodCategory}
                </p>
                <p>
                  <strong>Origin:</strong> {food.foodOrigin}
                </p>
                <p>
                  <strong>Price:</strong> ${food.price}
                </p>
                <p>
                  <strong>Description:</strong> {food.description}
                </p>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {isModalOpen && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="fixed inset-0 flex items-center mt-10 justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl mt-10 shadow-2xl w-11/12 max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Purchase Details
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Food Name:</strong> {food.foodName}
                </p>
                <p>
                  <strong>Category:</strong> {food.foodCategory}
                </p>
                <p>
                  <strong>Customer Name:</strong> {user?.displayName || 'Guest'}
                </p>
                <p>
                  <strong>Price:</strong> ${food.price}
                </p>
                <p>
                  <strong>Available Quantity:</strong> {food.quantity}
                </p>
              </div>

              <label className="block mt-6">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <input
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={e =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="mt-2 w-full border-2 border-gray-200 px-4 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
                  min="1"
                  max={food.quantity}
                />
              </label>

              <label className="block mt-6">
                <span className="text-gray-700 font-medium">
                  Delivery Location:
                </span>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="mt-2 w-full border-2 border-gray-200 px-4 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your address"
                />
              </label>

              <p className="mt-6 text-xl font-semibold text-gray-800">
                Total Price: ${totalPrice}
              </p>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SingleFoodPage;
