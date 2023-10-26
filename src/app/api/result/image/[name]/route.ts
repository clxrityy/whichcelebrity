import imgApi from "@/lib/unsplash";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    
    const url = 'http://localhost:3000/api/result/image/';
    const name = req.url.replace(url, '');

    const response = imgApi.search.getPhotos({
        query: name,
        orientation: 'portrait',
    }).then((res => res));

    if (!response || response === undefined || response === null) return NextResponse.json({ success: false, status: 400 });

    const result = (await response).response!.results[0];

    const image = result.urls.regular;

    return NextResponse.json(image);
}