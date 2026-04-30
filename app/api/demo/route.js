import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongo";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, institute, students, exam, source } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 },
      );
    }
    if (!phone || phone.trim().length < 10) {
      return NextResponse.json(
        { error: "Valid phone number is required" },
        { status: 400 },
      );
    }
    if (!institute || !institute.trim()) {
      return NextResponse.json(
        { error: "Coaching / Institute name is required" },
        { status: 400 },
      );
    }
    if (!students) {
      return NextResponse.json(
        { error: "Number of students is required" },
        { status: 400 },
      );
    }

    const collection = await getCollection("demo_leads");

    const lead = {
      name: name.trim(),
      phone: phone.trim(),
      institute: institute.trim(),
      students,
      exam: exam || null,
      source: source || "unknown",
      status: "new", // new | contacted | converted | lost
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await collection.insertOne(lead);

    return NextResponse.json(
      {
        success: true,
        message:
          "Demo booked successfully. We will contact you within 30 minutes.",
        id: result.insertedId,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[/api/demo] Error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or WhatsApp us directly.",
      },
      { status: 500 },
    );
  }
}

// Optional: GET to list leads (protect this route in production with auth middleware)
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status"); // e.g. ?status=new
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    const collection = await getCollection("demo_leads");

    const filter = status ? { status } : {};
    const leads = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (err) {
    console.error("[/api/demo] GET Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 },
    );
  }
}
