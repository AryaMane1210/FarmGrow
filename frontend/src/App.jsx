// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "../src/components/Navabr.jsx";
// import Footer from "../src/components/Footer.jsx";
// import Block from "../src/components/Block.jsx";  
// import ProductDetails from "../src/components/ProductDetails.jsx";
// import productData from "../src/data/Product.jsx";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div>
//         <Navbar isLoggedIn={isLoggedIn} />
//         <main className="p-4">
//           {!isLoggedIn ? (
//             <div>
//               <h2>Welcome to FarmGrow</h2>
//               <button
//                 onClick={() => setIsLoggedIn(true)}
//                 className="mt-2 bg-blue-500 px-4 py-2 text-white"
//               >
//                 Login
//               </button>
//             </div>
//           ) : (
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <div className="flex flex-wrap gap-6 p-6">
//                     {Object.entries(productData).map(([veggieId, product]) => (
//                       <Block
//                         key={veggieId}
//                         imageSrc={product.image}
//                         veggieId={veggieId}
//                         title={product.name}
//                       />
//                     ))}
//                   </div>
//                 }
//               />
//               <Route path="/veggie/:veggieId" element={<ProductDetails />} />
//             </Routes>
//           )}
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navabr.jsx";
import Footer from "./components/Footer.jsx";
import Block from "./components/Block.jsx";  
import ProductDetails from "./components/ProductDetails.jsx";
import productData from "./data/Product.jsx";
import FarmerPage from "./components/FarmerPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileType, setProfileType] = useState(""); // new

  // Show the choice page if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex flex-1 flex-col items-center justify-center">
          <h2>Welcome to FarmGrow</h2>
          <p className="mt-4">Are you a...</p>
          <div className="mt-2 flex gap-4">
            <button
              className="bg-blue-500 px-4 py-2 text-white"
              onClick={() => {
                setProfileType("user");
                setIsLoggedIn(true);
              }}
            >
              User
            </button>
            <button
              className="bg-green-600 px-4 py-2 text-white"
              onClick={() => {
                setProfileType("farmer");
                setIsLoggedIn(true);
              }}
            >
              Farmer
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // After login, route based on profileType
  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="p-4">
          <Routes>
            {profileType === "user" ? (
              <>
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
              </>
            ) : (
              // farmer route
              <>
                <Route path="/" element={<FarmerPage />} />
              </>
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

