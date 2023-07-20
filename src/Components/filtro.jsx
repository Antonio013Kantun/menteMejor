import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', category: 'Category A' },
  { id: 2, name: 'Product 2', category: 'Category B' },
  { id: 3, name: 'Product 3', category: 'Category A' },
  { id: 4, name: 'Product 4', category: 'Category C' },
  { id: 5, name: 'Product 5', category: 'Category B' },
];

const ProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Product Filter</h1>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      >
        <option value="">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        <option value="Category C">Category C</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="border border-gray-300 rounded px-4 py-2 mb-2"
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
