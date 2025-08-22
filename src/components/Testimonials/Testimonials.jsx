import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((t) => (
            <div
              key={t}
              className="bg-white shadow p-6 rounded-lg"
            >
              <p className="italic">
                "This store has the best products I’ve ever bought!"
              </p>
              <h4 className="mt-4 font-semibold">Customer {t}</h4>
            </div>
          ))}
        </div>
      </section>
        </div>
    );
};

export default Testimonials;