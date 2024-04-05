import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, email_addresses, first_name, image_url } = body?.data;
        const email = email_addresses[0]?.email_address;

        console.log("It worked..... 😃", body);

        await db.user.upsert({
            where: {
                clerkId: id,
            },
            update: {
                email,
                name: first_name,
                profileImage: image_url,
            },
            create: {
                clerkId: id,
                email,
                name: first_name || "",
                profileImage: image_url,
            },
        });

        return new NextResponse("User updated successfully", { status: 200 });
    } catch (err) {
        console.error("Error in api/clerk-webhook POST", err);
        return new NextResponse("Error occured", { status: 500 });
    }
}
