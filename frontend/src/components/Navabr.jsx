import React, { useState } from 'react';

const Navbar =({ isLoggedIn }) =>{
    return(
        <nav className="p-3 bg-green-700 text-white flex justify-between">
     <div className="flex items-center space-x-2">
    <img src="" alt="" className="w-8 h-8" />
    <span className="text-xl font-bold">FarmGrow</span>
      </div>

      {isLoggedIn && (
        <div className="space-x-4">
            <button className="hover:underline"> Trendy Recipes</button>
            <button className="hover:underline"> Profile </button>
        </div>
      )}
        </nav>
    );
};

export default Navbar;