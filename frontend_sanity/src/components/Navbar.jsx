import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 dark:bg-gray-900">
        <div className="flex justify-start items-center w-full px-2 rounded-full bg-white dark:bg-gray-800 dark:text-gray-100 border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white dark:bg-gray-800 dark:text-white outline-none"
          />
        </div>
        <div className="flex gap-3 dark:bg-gray-900">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src={user.image} alt="user-profile-pic" title="User Profile Image" className="w-14 h-12 rounded-full " />
          </Link>
          {/* TODO: make + button a little nicer */}
          {/* FIXME: make + button a little nicer  */}
          <Link to="/create-pin" title="Add a Pin" className="bg-gray-700 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;
