import { NextResponse } from "next/server";

import { FirebaseAdminService } from "@/lib/firebase/init";

export async function GET() {
  try {
    console.log("Fetching users")
    const fb = new FirebaseAdminService();
    const usersList = await fb.listUsers(1000);

    return NextResponse.json({users: usersList });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


