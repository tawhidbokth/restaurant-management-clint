import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AouthContext } from '../Provider/AouthProvider';

const MyOrder = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AouthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/foods-purchase?email=${user.email}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [user.email]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Owner</th>
              <th>Buying date and time</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={food.foodImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{food.foodName}</td>
                <td>{food.price}</td>
                <td>{food.userName}</td>
                <td>{food.buyingDate}</td>
                <td>
                  <button className="btn btn-link">View Applications</button>
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
