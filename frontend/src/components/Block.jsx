import React from 'react';
import { Link } from 'react-router-dom';

const Block = ({ imageSrc, title, veggieId }) => {
  return (
    <div className="w-72 rounded-lg border shadow-md flex flex-col min-h-[420px]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          Here are the biggest enterprise technology acquisitions...
        </p>
        <Link to={`/veggie/${veggieId}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Block;
