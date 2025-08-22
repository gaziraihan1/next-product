"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Featured = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {product.slice(0,6).map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <Image
                src={p.image}
                width={400}
                height={250}
                alt="Product"
                className="rounded-lg w-full h-60 object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">Product {p.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {p.description.length > 50
                    ? p.description.slice(0, 50) + "..."
                    : p.description}
              </p>
            </div>
          ))}
        </div>
      </section>
        </div>
    );
};

export default Featured;