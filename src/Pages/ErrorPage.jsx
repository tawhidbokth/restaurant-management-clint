import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-gray-500">
          It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow hover:bg-blue-600 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
