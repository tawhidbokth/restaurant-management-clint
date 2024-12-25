import React, { useContext, useEffect, useState } from 'react';
import { AouthContext } from '../Provider/AouthProvider';
import Swal from 'sweetalert2';

const MyOrder = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AouthContext);

  // Fetch purchased foods data for the logged-in user
  useEffect(() => {
    fetch(`http://localhost:5000/foods-purchase?email=${user.email}`)
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
        fetch(`http://localhost:5000/foods-purchase/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'The food item has been deleted.',
                icon: 'success',
              });

              // Update UI by filtering out the deleted food
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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Owner</th>
              <th>Buying Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food.foodImage} alt="Food Item" />
                      {console.log('image', food.foodImage)}
                    </div>
                  </div>
                </td>
                <td>{food.foodName}</td>
                <td>{food.price}</td>
                <td>{food.userName}</td>
                <td>{food.buyingDate}</td>
                <td>
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
    </div>
  );
};

export default MyOrder;
