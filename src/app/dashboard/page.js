// app/dashboard/page.js
import { Suspense } from 'react';
import Loading from './loading';
import ProductCard from './ProductCard';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

async function Products() {
  const products = await fetchProducts(); // Await the promise
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold p-6">Product Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}
