"use client";

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type TextContextStateType = {
	family: string;
	size: string;
	color: string;
};
type TextContextValueType = {
	text: TextContextStateType;
	setText: Dispatch<SetStateAction<TextContextStateType>>;
};
export const DefaultTextContextState: TextContextStateType = {
	family: "Comic Sans MS",
	size: "16px",
	color: "black"
};

export const TextContext = createContext<TextContextValueType | null>(null);

export default function TextContextProvider({ children }: Readonly<{
	children: React.ReactNode
}>) {
	const [text, setText] = useState<TextContextStateType>(DefaultTextContextState);
	
	return (
		<TextContext.Provider value={{ text, setText }}>
			{children}
		</TextContext.Provider>
	);
};

export function useTextContext(): TextContextValueType {
	const context = useContext(TextContext);

	if (context === null) {
		throw new Error("We have no context");
	}

	return context;
};