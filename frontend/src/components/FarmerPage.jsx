// import React from "react";

// function FarmerPage() {
//   return (
//     <div>
//       <h2>Welcome, Farmer!</h2>
//       {/* Add more content or features for farmers here */}
//     </div>
//   );
// }

// export default FarmerPage;


import React from "react";
import FarmerNavbar from "./FarmerNavbar";
import FarmerDashboard from "./FarmerDashboard";

function FarmerPage() {
  return (
    <div>
      <FarmerNavbar />
      <FarmerDashboard />
    </div>
  );
}

export default FarmerPage;
