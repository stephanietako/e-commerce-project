import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/sanity";

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const query = `*[_type == 'user' && _id == $userId][0] {
      _id,
      name,
      email,
      isAdmin,
      _createdAt,
      image
    }`;

    const user = await client.fetch(query, { userId: id });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
