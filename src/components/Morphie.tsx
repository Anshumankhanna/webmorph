"use client";

import { useApiContext } from "@/context/ApiContext";

/*
    I am making a project named web morph, in it I am creating a web application that has an api application, users can ask the ai named Morphie about colors and layouts that may look good for a website that they want to create, layouts being like masonry, grid and bento, there is a grid that displays products and that grid can change its layout type based on what the ai application returns as output, also the colors that it returns will apply to the entire website, colors will include primary_color, second_color, accent_color and background_color

    Tech used is react, tailwindcss, ts, deno, nextjs
*/

export default function Morphie() {
    const {
        appearance: {
            colors: {
                primary_color,
                secondary_color,
                accent_color,
                background_color
            }
        }
    } = useApiContext();

    return (
        <div className="w-1/2 p-3">
            <div className="h-full rounded-lg p-6 flex flex-col justify-between custom-shadow" style={{ backgroundColor: background_color }}>
                <h1 className="text-7xl font-bold text-center" style={{ color: secondary_color }}>Say Hi to</h1>
                <h2 className="text-7xl font-bold text-center" style={{ color: primary_color }}>Morphie</h2>
                <p className="text-center" style={{ color: accent_color }}>
                    Whenever you come across a site that you feel suits your needs but maybe requires just a small style change, you can not just ask to apply those changes but also get suggested by Morphie.
                </p>
            </div>
        </div>
    );
};