import React, { useContext, useEffect, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

const MyOrder = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { user } = useContext(AouthContext);

  useEffect(() => {
    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods-purchase?email=${user.email}`
    )
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://restaurant-management-server-lilac.vercel.app/foods-purchase/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'The food item has been deleted.',
                icon: 'success',
              });

              const remainingFoods = foods.filter(food => food._id !== id);
              setFoods(remainingFoods);
            }
          })
          .catch(error => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete the food item.',
              icon: 'error',
            });
          });
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = foods.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto mt-16 border-2 my-10 lg:mx-5 rounded-lg shadow-lg">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">No:</th>
              <th className="p-4 text-left">Food Image</th>
              <th className="p-4 text-left">Food Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Owner</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Buying Date and Time</th>
              <th className="p-4 text-left">Progress</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentFoods.map((food, index) => (
              <tr
                key={food._id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="p-4 border-b">{index + 1}</td>
                <td className="p-4 border-b">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={food.foodImage}
                        alt="Food Item"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b">{food.foodName}</td>
                <td className="p-4 border-b">${food.price}</td>
                <td className="p-4 border-b">{food.userName}</td>
                <td className="p-4 border-b">{food.quantity}</td>
                <td className="p-4 border-b">{food.buyingDate}</td>
                <td className="p-4 border-b">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {food.pogress}
                  </span>
                </td>
                <td className="p-4 border-b">
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                  >
                    <FaTrash className="inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from(
          { length: Math.ceil(foods.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MyOrder;
