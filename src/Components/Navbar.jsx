import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AouthContext } from '../Provider/AouthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AouthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const listnav = (
    <>
      <li onClick={closeMenu}>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/allfoods">All Foods</NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:w-[1400px] lg:mx-auto">
      <div className="navbar-start flex items-center">
        <a className="btn btn-ghost p-0">
          <p>logo</p>
        </a>

        <button
          className="lg:hidden btn btn-ghost ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listnav}</ul>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden navbar-end w-full bg-base-100 shadow-lg">
          <ul className="menu w-full p-4">{listnav}</ul>
        </div>
      )}

      <div className="navbar-end flex items-center gap-4 relative">
        {user ? (
          <div className="flex items-center gap-4">
            {/* Sign Out Button */}
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
            {/* Profile Image and Dropdown */}
            <div className="relative">
              <div className="avatar cursor-pointer" onClick={toggleDropdown}>
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Profile" />
                </div>
              </div>
              {showDropdown && (
                <div className="absolute z-10 right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                  <Link
                    to="/myfoods"
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    My Foods
                  </Link>
                  <Link
                    to="/addfoods"
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    Add Foods
                  </Link>
                  <Link
                    to="/myorder"
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    My Orders
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link to={'/login'} className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
