import React from 'react';

const ProductCard = ({ product, userId, handleAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">User ID: {userId}</p>
      <button
        onClick={handleAddToCart}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
