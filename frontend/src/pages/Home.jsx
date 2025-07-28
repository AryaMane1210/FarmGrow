
import React, { useState } from "react";
import Block from "../components/Block.jsx";
import ProductModal from "../components/ProductModal.jsx";
import productData from "../data/Product.jsx"; 
import { Buyer_Filter } from "../components/Buyer_Filter.jsx";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex gap-6 px-2 py-4">
      {/* Sidebar Filter */}
      <div className="w:1/4">
        <Buyer_Filter />
      </div>
    <div className="flex flex-wrap gap-4 px-6 py-4">
      {Object.keys(productData).map((key) => (
        <Block
          key={key}
          imageSrc={productData[key].image}
          title={productData[key].name}
          veggieId={key}
          onOpen={() => handleOpenModal(productData[key])}
        />
      ))}
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={true}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Home;
