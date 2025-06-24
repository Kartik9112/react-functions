import React, { useState, useMemo } from 'react';

const products = [
  {
    id: 1,
    name: 'Iphone14',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1695578130391-929bdfff85d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww'
  },
  {
    id: 2,
    name: 'Samsung Galaxy',
    category: 'Mobile',
    image: 'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg'
  },
  {
    id: 3,
    name: 'Macbook Air',
    category: 'Laptop',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-gallery1-20220606?wid=400&hei=400'
  },
  {
    id: 4,
    name: 'HP Pavilion',
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhwJTIwbGFwdG9wfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    name: 'Lenovo',
    category: 'Laptop',
    image: 'https://media.istockphoto.com/id/1456047933/photo/laptop-on-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nvs_9lvBfgXSiLy2_W3es52u3XF46u5Nx_E5fO7PigY='
  },
  {
    id: 6,
    name: 'Charger',
    category: 'Accessory',
    image: 'https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjaGFyZ2VyfGVufDB8fDB8fHww'
  },
  {
    id: 7,
    name: 'Airpods',
    category: 'Accessory',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632861342000'
  },
  {
    id: 8,
    name: 'Vivo',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1746366782635-aabca81d2719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpdm98ZW58MHx8MHx8fDA%3D'
  }
];

const ProductResult = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === 'All' || product.category === category;
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Product Catalog</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={search}
          placeholder="Search any product you want"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        >
          <option value="All">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessory">Accessory</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500 col-span-full">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductResult;
