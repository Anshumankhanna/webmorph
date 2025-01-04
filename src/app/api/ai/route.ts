import { Appearance, MorphieResponse, Output } from "@/models/MorphieResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse<Output | Appearance[] | { error: string }>> {
    const { searchParams }: { searchParams: URLSearchParams } = new URL(request.url);
    const user_input: string | null = searchParams.get("user_input");

    if (!user_input) {
        return NextResponse.json({ error: "No input provided." });
    }

    try {
        const response = await fetch(`${process.env.MORPHIE_URL}?user_input=${user_input}`, {
            method: "POST"
        });
        const output: MorphieResponse = await response.json();
        
        if ("output" in output) {
            return NextResponse.json(output);
        }

        const appearanceList: Appearance[] = output.colors.map((color, index) => ({
            colors: color,
            layout: output.layout[index],
        }));

        return NextResponse.json(appearanceList);
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "Check the AI Microservice." });
    }
}