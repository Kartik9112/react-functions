import React from 'react';

const AddtoCart = ({ productId, userId, handleAddToCart }) => {
  return (
    <button
      onClick={() => handleAddToCart(productId)}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Add to Cart (User: {userId})
    </button>
  );
};

export default AddtoCart;
