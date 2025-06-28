import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ userId, handleAddToCart }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    {
      id: 'p1',
      name: 'Macbook Air M4',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'p2',
      name: 'Ryzen 5 Processor',
      image:
        'https://images.unsplash.com/photo-1717444308866-dcfc964bab23?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'p3',
      name: 'Phone User',
      image:
        'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'p4',
      name: 'Chasma',
      image:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'p5',
      name: 'Bottle',
      image:
        'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=600&auto=format&fit=crop&q=60',
    },
  ];

  const handleClick = (product) => {
    handleAddToCart(product.id);
    setSelectedProducts((prev) => [...prev, product]);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        Product List
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userId={userId}
            handleAddToCart={() => handleClick(product)}
          />
        ))}
      </div>

      {/* Selected Products */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-green-700">
          Card Values (Added Products):
        </h3>
        {selectedProducts.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-4 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-600">ID: {product.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
