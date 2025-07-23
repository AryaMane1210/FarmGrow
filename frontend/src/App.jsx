import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navabr.jsx";
import Footer from "../src/components/Footer.jsx";
import Block from "../src/components/Block.jsx";  
import ProductDetails from "../src/components/ProductDetails.jsx";
import productData from "../src/data/Product.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="p-4">
          {!isLoggedIn ? (
            <div>
              <h2>Welcome to FarmGrow</h2>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="mt-2 bg-blue-500 px-4 py-2 text-white"
              >
                Login
              </button>
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex flex-wrap gap-6 p-6">
                    {Object.entries(productData).map(([veggieId, product]) => (
                      <Block
                        key={veggieId}
                        imageSrc={product.image}
                        veggieId={veggieId}
                        title={product.name}
                      />
                    ))}
                  </div>
                }
              />
              <Route path="/veggie/:veggieId" element={<ProductDetails />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
