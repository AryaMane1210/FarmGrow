// // import React from 'react';
// // import { Link } from 'react-router-dom';

// const Block = ({ imageSrc, title, veggieId }) => {
//   return (
//     <div className="w-72 rounded-lg border shadow-md flex flex-col min-h-[420px]">
//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt={title}
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//         )}

//       <div className="p-4 flex-grow">
//         <h3 className="text-lg font-bold">{title}</h3>
        
        
//           <button className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => onOpen(veggieId)}>
//             View Details
//           </button>
        
//       </div>
//     </div>
//   );
// };

// export default Block;


import React from "react";

const Block = ({ imageSrc, title, veggieId, onOpen }) => {
  return (
    <div
      className="w-64 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={onOpen}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-xl flex items-center justify-center text-gray-500 text-sm">
          No image
        </div>
      )}
      <div className="p-4 flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
           {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation(); // prevent modal trigger
              console.log("Add to cart", veggieId);
            }}
          >
            Add to Cart
          </button>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm px-4 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation(); // prevent modal trigger
              console.log("Negotiate", veggieId);
            }}
          >
            Negotiate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block;
