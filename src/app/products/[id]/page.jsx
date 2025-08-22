import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();

  return (
    <div className="p-6 shadow-lg rounded max-w-sm mx-auto">
        <div>
            <Image width={300} height={400} alt="Product image" src={product.image} priority={false}
            className="w-full h-60 rounded"/>
        </div>
      <h1 className="text-2xl font-bold my-2">{product.name}</h1>
      <p className="text-gray-600 py-2">Price: {product.price} USD</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}
