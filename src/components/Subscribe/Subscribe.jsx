import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <section className="bg-gray-200 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Newsletter</h2>
        <p className="mb-6 text-gray-700">Stay updated with our latest offers and products.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline px-4 py-2 rounded-lg text-gray-800 w-full sm:w-auto flex-grow bg-gray-100"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-white/80 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
        </div>
    );
};

export default Subscribe;