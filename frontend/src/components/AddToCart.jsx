import React, { useState } from 'react';

const AddToCart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="p-8">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
                Add to Cart
            </button>

            {modalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40">
                    <div
                        className="fixed inset-0 bg-white bg-opacity-50"
                        onClick={() => setModalOpen(false)}
                    />
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-4 relative">
                        <button 
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        
                        <h3 className="text-lg font-bold mb-4">Add to Cart</h3>
                        
                        <div className="mb-4">
                            <img 
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" 
                                alt="Product" 
                                className="w-20 h-20 mx-auto mb-2"
                            />
                            <p className="text-center font-medium">Apple iMac</p>
                            <p className="text-center text-green-600 font-bold">$1,499</p>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
                            <div className="flex items-center justify-center gap-2">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <input 
                                    id="quantity" 
                                    type="number" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 text-center border rounded px-2 py-1"
                                />
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setModalOpen(false)}
                                className="flex-1 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={() => {
                                    alert(`Added ${quantity} item(s) to cart!`);
                                    setQuantity(1);
                                    setModalOpen(false);
                                }}
                                className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToCart;