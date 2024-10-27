// UserProfileHeader.js
import React from 'react';

function UserProfileHeader ({ profilePicture, fullName, username }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{fullName}</span>
        <span className="text-sm text-gray-500">@{username}</span>
      </div>
    </div>
  );
};

export default UserProfileHeader;
