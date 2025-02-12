import React, { useContext, useEffect, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import Swal from 'sweetalert2';
const MyOrder = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AouthContext);
  useEffect(() => {
    fetch(
      `https://restaurant-management-server-lilac.vercel.app/foods-purchase?email=${user.email}`
    )
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [user.email]);

  // Handle delete food
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

  return (
    <div className="overflow-x-auto mt-16 border-2 my-10 lg:mx-5">
      <table className="table w-full">
        {/* Table Head */}
        <thead>
          <tr>
            <th className="p-2">No:</th>
            <th className="p-2">Food Image</th>
            <th className="p-2">Food Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Owner</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Buying Date and Time</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={food._id}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={food.foodImage} alt="Food Item" />
                  </div>
                </div>
              </td>
              <td className="p-2">{food.foodName}</td>
              <td className="p-2">{food.price}</td>
              <td className="p-2">{food.userName}</td>
              <td className="p-2">{food.quantity}</td>
              <td className="p-2">{food.buyingDate}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(food._id)}
                  className="btn btn-link text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
