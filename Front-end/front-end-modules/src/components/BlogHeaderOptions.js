import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const BlogHeaderOptions = ({ onFollowClick, isFollowing }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="relative flex items-center space-x-2">
      {/* Follow/Join Button */}
      <button
        onClick={onFollowClick}
        className={`px-2 py-1 text-white font-xs/8 rounded-full ${
          isFollowing ? 'bg-gray-500' : 'bg-blue-500'
        } hover:bg-opacity-90 focus:outline-none`}
      >
        {isFollowing ? 'Following' : 'Join'}
      </button>

      {/* Three Dots Button */}
      <button
        onClick={toggleDropdown}
        className="text-gray-700 hover:bg-gray-200 rounded-full p-2 focus:outline-none"
      >
        <FaEllipsisV />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-1 w-28 bg-white shadow-lg rounded-lg py-1">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Report
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Save Post
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Block User
          </a>
        </div>
      )}
    </div>
  );
};

export default BlogHeaderOptions;
