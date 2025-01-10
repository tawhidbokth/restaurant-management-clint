import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AouthContext } from '../Provider/AouthProvider';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const navLinks = (
    <>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/" className="hover:text-orange-500">
          Home
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/allfoods" className="hover:text-orange-500">
          All Foods
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/gallery" className="hover:text-orange-500">
          Gallery
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <ThemeToggleButton></ThemeToggleButton>
      </li>
    </>
  );

  return (
    <header className="bg-gray-900 text-white fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co/3dLVZ1x/DALL-E-2024-12-25-08-39-19-A-luxurious-golden-logo-design-for-a-restaurant-named-Savory-Delight-The.webp"
            alt="Savory Delight"
          />
          <span className="text-xl font-bold ml-3">Savory Delight</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center">{navLinks}</ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* User Section */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4">
          {user ? (
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Sign Out
              </button>
              <div className="relative z-10">
                <div className="avatar cursor-pointer" onClick={toggleDropdown}>
                  <div className="w-14 rounded-full">
                    <img src={user.photoURL} alt="User Profile" />
                  </div>
                </div>
                {showDropdown && (
                  <div className="absolute w-[150px] right-0 mt-2 bg-white text-black shadow-lg rounded">
                    <Link
                      to="/myfoods"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Foods
                    </Link>
                    <Link
                      to="/addfoods"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Add Foods
                    </Link>
                    <Link
                      to="/myorder"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden navbar-end w-fullshadow-lg">
          <ul className="menu w-full p-4">
            {navLinks}
            <div className="text-white rounded">
              <Link
                to="/myfoods"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                My Foods
              </Link>
              <Link
                to="/addfoods"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Add Foods
              </Link>
              <Link
                to="/myorder"
                className="block px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                My Orders
              </Link>
            </div>
          </ul>
          <div className="flex flex-col items-center gap-4 mt-4">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                >
                  Sign Out
                </button>
                <div className="relative z-10">
                  <div
                    className="avatar cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <div className="w-14 rounded-full">
                      <img src={user.photoURL} alt="User Profile" />
                    </div>
                  </div>
                  {/* {showDropdown && (
                    // <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded">
                    //   <Link
                    //     to="/myfoods"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     My Foods
                    //   </Link>
                    //   <Link
                    //     to="/addfoods"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     Add Foods
                    //   </Link>
                    //   <Link
                    //     to="/myorder"
                    //     className="block px-4 py-2 hover:bg-gray-100"
                    //   >
                    //     My Orders
                    //   </Link>
                    // </div>
                  )} */}
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </header>
  );
};

export default Navbar;
