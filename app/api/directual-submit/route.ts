import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body?.phone) {
            return NextResponse.json(
                { error: "Phone is required" },
                { status: 400 }
            );
        }

        const apiUrl = `https://api.directual.com/good/api/v5/data/PopUp_Requests/new_request?appID=${process.env.DIRECTUAL_APP_ID}`;

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: body.name,
                phone: body.phone,
                email: body.email,
                comment: body.comment,
                chat_key: process.env.DIRECTUAL_CHAT_KEY,
            }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Directual error: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error(error);

        return NextResponse.json(
            { error: error.message || "Ошибка сервера" },
            { status: 500 }
        );
    }
}
