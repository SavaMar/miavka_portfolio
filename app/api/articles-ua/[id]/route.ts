import { getPostData } from "@/lib/markdownUtils-ua";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const article = await getPostData(params.id);
    return NextResponse.json(article);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }
}
