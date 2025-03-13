import { getSortedArticlesData } from "@/lib/markdownUtils-ua";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const articles = getSortedArticlesData();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
