// import React from "react";
// import productData from "../data/Product.jsx";

// const ProductModal = ({ veggieId, onClose }) => {
//   const product = productData[veggieId];
//   if (!product) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg p-8 shadow-xl max-w-2xl w-full flex gap-8"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img src={product.image} alt={product.name} className="w-60 rounded-lg" />
//         <div>
//           <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
//           <p className="text-green-700 text-lg mb-3">{product.price}</p>

//           <div className="mb-3">
//             {product.sizes.map((size, index) => (
//               <div key={index} className="border p-2 rounded mb-2">
//                 <span className="font-semibold">{size.label}</span> – {size.price}
//               </div>
//             ))}
//           </div>

//           <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
//             Add to basket
//           </button>

//           <p className="mt-4 text-gray-600">{product.description}</p>
//         </div>
//         <button
//           className="absolute top-6 right-6 text-gray-700 text-2xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;


// import React from "react";

// const ProductModal = ({ isOpen, onClose, product }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/30  backdrop-blur-sm flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
//         <button
//           className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-bold mb-4">{product.title}</h2>
//         {product.image ? (
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-48 object-cover rounded"
//           />
//         ) : (
//           <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//             No image
//           </div>
//         )}
//         <p className="mt-4 text-gray-700">
//           {/* Add any other product info here */}
//           This is a detailed view of {product.title}.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import Quantity from "./Quantity.jsx";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90vw] max-w-3xl h-auto max-h-[90vh] overflow-y-auto rounded-xl shadow-xl z-50 p-6 flex gap-6">
        
        {/* Left - Product Image */}
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description || "No description provided."}</p>
            <div className="flex flex-col gap-2">
            <p className="text-md font-medium text-green-700">
              Quantity: {product.quantity || "N/A"}
            </p>
            <div className="flex items-center gap-20">
            <p className="text-md font-medium text-green-700 ">
              Price: ₹{product.price || "Unknown"}
            </p>
            <Quantity />
            </div>
            </div>
          </div>
            <div className= "flex gap-10">           
              <button
             className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg self-start hover:bg-green-600"
          >
            Add to Cart
          </button>
          <button
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg self-start hover:bg-blue-600"
          >
            Negotiate
          </button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
