import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("yourProduct");
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(params.id) });

    if (!product) {
      return Response.json({ message: "Not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    return Response.json({ message: "Error fetching product" }, { status: 500 });
  }
}