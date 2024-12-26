import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-4">About Us</h6>
            <p className="flex items-center gap-3">
              <img
                className="w-[80px] rounded-full"
                src="https://i.ibb.co.com/3dLVZ1x/DALL-E-2024-12-25-08-39-19-A-luxurious-golden-logo-design-for-a-restaurant-named-Savory-Delight-The.webp"
                alt=""
              />
              <p>Savory Delight</p>
            </p>
            <p className="text-gray-400">
              Welcome to our restaurant! We serve delicious meals crafted with
              love. Visit us to enjoy mouthwatering dishes and excellent
              service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h6>
            <nav className="flex flex-col gap-2">
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
              <a href="#menu" className="hover:text-orange-500">
                Menu
              </a>
              <a href="#" className="hover:text-orange-500">
                Reservations
              </a>
              <a href="#" className="hover:text-orange-500">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h6 className="text-xl font-semibold text-white mb-4">Follow Us</h6>
            <p className="text-gray-400">
              Stay connected with us on social media:
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 text-xl transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 text-xl transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 text-xl transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tawhid Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
