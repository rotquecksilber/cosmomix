import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const apiUrl = `https://api.directual.com/good/api/v5/data/new_client/new_client?appID=${process.env.DIRECTUAL_APP_ID}`;

        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                ...body,

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
        console.error('Ошибка в роуте анкеты:', error);
        return NextResponse.json(
            { error: error.message || 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
