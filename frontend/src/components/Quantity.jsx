import React, { useState } from "react";

const Quantity = () =>{
    const [quantity, setQuantity] = useState(1);

    const increase = () =>setQuantity(prev => prev +1);
    const decrease = () => {
        if(quantity > 1) setQuantity(prev => prev - 1);
    };

   return (
    <div className= "flex items-center gap-2">
        <button onClick={decrease}
        className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded" >
            - 
        </button>
        <span className="text-lg font-medium"> | {quantity} | </span>
        <button onClick={increase}
        className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded" >
            +
        </button>
    </div>
   )
}

export default Quantity;