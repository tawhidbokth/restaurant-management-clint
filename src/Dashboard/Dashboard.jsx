import React, { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaAddressCard,
  FaBookmark,
} from 'react-icons/fa';
import { GoListOrdered } from 'react-icons/go';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-gray-900">
          {!isCollapsed && <h2 className="text-xl font-semibold">Dashboard</h2>}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-4">
          <Link to={'/'}>
            <SidebarItem
              icon={<FaHome />}
              text="Home"
              isCollapsed={isCollapsed}
            />
          </Link>
          <Link to={'/dashboard/analytics'}>
            <SidebarItem
              icon={<FaChartLine />}
              text="Analytics"
              isCollapsed={isCollapsed}
            />
          </Link>
          <Link to={'/dashboard/useranalytics'}>
            <SidebarItem
              icon={<FaChartLine />}
              text="User Analytics"
              isCollapsed={isCollapsed}
            />
          </Link>

          <Link to={'/dashboard/myfoods'}>
            <SidebarItem
              icon={<GoListOrdered />}
              text="My Foods"
              isCollapsed={isCollapsed}
            />
          </Link>
          <Link to={'/dashboard/addfoods'}>
            <SidebarItem
              icon={<FaAddressCard />}
              text="Add Foods"
              isCollapsed={isCollapsed}
            />
          </Link>
          <Link to={'/dashboard/myorder'}>
            <SidebarItem
              icon={<BiCart />}
              text="MY Order"
              isCollapsed={isCollapsed}
            />
          </Link>
          <Link to={'/dashboard/booking'}>
            <SidebarItem
              icon={<FaBookmark />}
              text="Reservation"
              isCollapsed={isCollapsed}
            />
          </Link>
          <SidebarItem
            icon={<FaSignOutAlt />}
            text="Logout"
            isCollapsed={isCollapsed}
          />
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isCollapsed }) => {
  return (
    <li className="px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
      <a href="#" className="flex items-center space-x-3">
        <span className="text-xl">{icon}</span>
        {!isCollapsed && <span>{text}</span>}
      </a>
    </li>
  );
};

export default Sidebar;
