import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AouthContext } from '../Provider/AouthProvider';

const MyFoods = () => {
  const [foods, setfoods] = useState([]);
  const { user } = useContext(AouthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/foods?email=${user.email}`)
      .then(res => res.json())
      .then(data => setfoods(data));
  }, [user.email]);

  return (
    <div className="w-[1200px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food image</th>
              <th>Food Name</th>
              <th>Food Price</th>
              <th>Food Update</th>
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
                <td>${food.price}</td>
                <td>
                  <Link to={`/update/${food._id}`}>
                    <button className="btn btn-link">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoods;
