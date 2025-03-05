"use client";

import { Appearance } from "@/types/MorphieResponse";
import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from "react";

type ApiData = {
    appearance: Appearance;
    setAppearance: Dispatch<SetStateAction<Appearance>>;
};

const ApiDataContext = createContext<ApiData | null>(null);

const dummy = {
    colors: {
        primary_color: "#16F0B1",
        secondary_color: "#FFFFFF",
        accent_color: "#D9D9D9",
        background_color: "#272425"
    },
    layout: "bento",
};

function ApiContext({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
    const [appearance, setAppearance] = useState<Appearance>(dummy);

    return (
        <ApiDataContext.Provider value={{ appearance, setAppearance }}>
            {children}
        </ApiDataContext.Provider>
    );
}

function useApiContext() {
    const context = useContext(ApiDataContext);

    if (context === null) {
        throw new Error("Context is empty.")
    }

    return context;
}

export default ApiContext;
export { useApiContext };
export type { ApiData };