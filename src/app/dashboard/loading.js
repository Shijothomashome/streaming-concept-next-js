// app/dashboard/loading.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Array(6).fill().map((_, index) => (
        <div key={index} className="border p-4">
          <Skeleton height={200} />
          <Skeleton height={20} width="80%" />
          <Skeleton height={20} width="60%" />
          <Skeleton height={20} width="40%" />
        </div>
      ))}
    </div>
  );
}
