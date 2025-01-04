"use client";

import { useApiContext } from "@/context/ApiContext"

export default function Background() {
    const {
        appearance: {
            colors: {
                background_color
            }
        }
    } = useApiContext();

    return (
        <div className="absolute w-full h-full" style={{
            backgroundColor: background_color,
            zIndex: -99
        }}></div>
    );
};