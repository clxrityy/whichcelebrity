import query from "@/lib/query";
import { promptParser } from "@/util/promptParser";
import { parseCelebrity } from "@/util/parseCelebrity";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const url = 'http://localhost:3000/api/result/';
    const id = req.url.replace(url, '');


    const array = id.split('');
    const numArray = array.map((value) => Number(value));

    const prompt = promptParser(numArray);

    if (!prompt) return NextResponse.json({ success: false, status: 400 });

    const response = await query(prompt);

    if (!response || response === undefined) return NextResponse.json({ success: false, status: 400 });

    const celebrity = parseCelebrity(response);
    
    return NextResponse.json(celebrity);
}


