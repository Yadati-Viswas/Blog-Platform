import React from 'react';

const ActionButton = ({ icon, value, label, onClick }) => {
  return (
    <button
      className="flex items-center px-2 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {value && <span>{value}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default ActionButton;
