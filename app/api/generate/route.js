import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json(); // ✅ Await the JSON body

  const client = await clientPromise;
  const db = client.db("Bitlinks");
  const collection = db.collection("url");

  // ✅ Check if the short URL already exists
  const existing = await collection.findOne({ shorturl: body.shorturl });

  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "Short URL already exists",
    });
  }

  // ✅ Insert the new URL mapping
  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
     // optional: for tracking
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfully",
  });
}
