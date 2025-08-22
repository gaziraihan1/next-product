import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, price, description, image } = await req.json();

    const client = await clientPromise;
    const db = client.db("yourProduct");

    const result = await db.collection("products").insertOne({
      name,
      price,
      description,
      image,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function GET() {
  try{
    const client = await clientPromise;
    const db =  client.db("yourProduct");
    const products = await db.collection("products").find().toArray();
    return Response.json(products, {status: 200})
  }
  catch(error) {
    return Response.json(
      {message: 'Status not found'},{
        status: 500
      }
    )
  }
}
