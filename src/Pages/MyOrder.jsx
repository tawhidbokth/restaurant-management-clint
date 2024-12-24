import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrder = () => {
  const purchase = useLoaderData();
  console.log(purchase);
  return (
    <div>
      <h1>My order{purchase.length}</h1>
    </div>
  );
};

export default MyOrder;
