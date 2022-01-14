import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 py-1 gap-2 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-black hover:bg-gray-100 transition-all duration-100 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 py-1 gap-2 font-extrabold border-r-4 border-red-500 dark:border-red-600 dark:bg-gray-700 bg-gray-100 transition-all duration-100 ease-in-out capitalize';

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between dark:border-r-2 dark:border-gray-300 bg-white dark:bg-gray-800 h-full overflow-y-scroll min-w-[100%] hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-5 pb-2 mt-6 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5 dark:text-gray-300">

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-lg 2xl:text-xl dark:text-gray-300">Discover cateogries</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>{user.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
