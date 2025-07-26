// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import Navbar from "./components/Navabr.jsx";
// import Footer from "./components/Footer.jsx";
// import Block from "./components/Block.jsx";  
// import ProductDetails from "./components/ProductDetails.jsx";
// import productData from "./data/Product.jsx";
// import FarmerPage from "./components/FarmerPage.jsx";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profileType, setProfileType] = useState("");
//   const [redirectPath, setRedirectPath] = useState(""); // to handle redirect after login

//   // If not logged in: show login choices
//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar isLoggedIn={false} />
//         <main className="flex flex-1 flex-col items-center justify-center">
//           <h2>Welcome to FarmGrow</h2>
//           <p className="mt-4">Are you a...</p>
//           <div className="mt-2 flex gap-4">
//             <button
//               className="bg-blue-500 px-4 py-2 text-white"
//               onClick={() => {
//                 setProfileType("user");
//                 setIsLoggedIn(true);
//                 setRedirectPath("/");
//               }}
//             >
//               User
//             </button>
//             <button
//               className="bg-green-600 px-4 py-2 text-white"
//               onClick={() => {
//                 setProfileType("farmer");
//                 setIsLoggedIn(true);
//                 setRedirectPath("/farmer");
//               }}
//             >
//               Farmer
//             </button>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Redirector redirectPath={redirectPath} />
//       <div className="min-h-screen flex flex-col">
//         <Navbar isLoggedIn={isLoggedIn} />
//         <main className="flex-1">
//           <Routes>
//             {profileType === "user" ? (
//               <>
//                 <Route
//                   path="/"
//                   element={
//                     <div className="flex flex-wrap gap-6 p-6">
//                       {Object.entries(productData).map(([veggieId, product]) => (
//                         <Block
//                           key={veggieId}
//                           imageSrc={product.image}
//                           veggieId={veggieId}
//                           title={product.name}
//                         />
//                       ))}
//                     </div>
//                   }
//                 />
//                 <Route path="/veggie/:veggieId" element={<ProductDetails />} />
//                 {/* Unknown routes for user -> home */}
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </>
//             ) : (
//               <>
//                 {/* All FarmerPage logic & subroutes */}
//                 <Route path="/farmer/*" element={<FarmerPage />} />
//                 {/* Unknown routes for farmer -> farmer home */}
//                 <Route path="*" element={<Navigate to="/farmer" replace />} />
//               </>
//             )}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// // This will auto-redirect after login as soon as redirectPath is set
// function Redirector({ redirectPath }) {
//   const navigate = useNavigate();
//   React.useEffect(() => {
//     if (redirectPath) {
//       navigate(redirectPath, { replace: true });
//     }
//   }, [redirectPath, navigate]);
//   return null;
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navabr.jsx";
import Footer from "./components/Footer.jsx";
import Block from "./components/Block.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import productData from "./data/Product.jsx";
import FarmerPage from "./components/FarmerPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileType, setProfileType] = useState("");

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
      {profileType === "user" ? (
        <div className="min-h-screen flex flex-col">
          <Navbar isLoggedIn={isLoggedIn} />
          <main className="flex-1">
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      ) : (
        // All farmer dashboard pages (handles its own navbar/footer)
        <Routes>
          <Route path="/farmer/*" element={<FarmerPage />} />
          {/* Optionally, redirect any other route to /farmer for farmer profileType */}
          <Route path="*" element={<Navigate to="/farmer" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
