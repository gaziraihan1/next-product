import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="relative h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
            alt="Banner"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover amazing products at the best prices.
          </p>
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </section>
        </div>
    );
};

export default Banner;