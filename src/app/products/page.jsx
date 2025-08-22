"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(data => setProduct(data))
        setLoading(false)
    }, []);
    console.log(product)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12'>
            {
                product?.map(p => (
                    <div key={p._id} className='shadow p-4 rounded flex flex-col justify-between'>
                        <div>
                            <Image width={300} height={300} src={p.image} alt='Product image'
                            className='w-full h-50 object-cover rounded'/>
                        </div>
                        <h1 className='text-lg md:text-xl lg:text-2xl py-2 font-extrabold'>
                            {p.name}
                        </h1>
                        <p>
                            ${p.price}
                        </p>
                        <p className='py-2'>
                            {p.description}
                        </p>
                        <button className='px-6 py-2 bg-blue-700 rounded text-white my-2'>
                            <Link href={`/products/${p._id}`}>
                            
                            Product Details
                            </Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default page;