// app/dashboard/ProductCard.js
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
