import React, { useState } from 'react';
import Navbar from "../src/components/Navabr.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    <Navbar isLoggedIn={isLoggedIn} />
    <main className="p-4">
    {!isLoggedIn ? (
        <div>
        <h2> Welcome to FarmGrow </h2>
        <button onClick={()=> setIsLoggedIn(true)} className="mt-2 bg-blue-500 px-4 py-2 text-white">Login</button>
        </div>
    ) :(
        <div>
            <h2>list items</h2>
            <p>apple,mango, banana</p>
          </div>
    )}
    </main>
    </div>
  );
}

export default App;
