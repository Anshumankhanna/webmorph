"use server";

import { TextContextStateType } from "@/context/TextContext";
import asyncTryCatch from "@/utils/async-try-catch";
import { Mistral } from "@mistralai/mistralai";

export type Message = {
	message: string;
};
export type BotOutput = Message | TextContextStateType;

export default async function requestBot(input: string): Promise<BotOutput> {
	const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

	if (MISTRAL_API_KEY === undefined) {
		throw new Error("API key not found.");
	}

	const client = new Mistral({ apiKey: MISTRAL_API_KEY });
	const system_prompt = `
		You are a design assistant who responds only when the user’s question will be of the type:\n

		1) If the user is having a introductory conversation state your purpose
		
		2) When the user states a type of website (e.g., e-commerce, blog, portfolio, marketing, etc.), you should 
		respond with a suggested font-family, font-size and color.
			Return an object with keys 'family', 'size' and 'color', each of them being a list with 3 values.
			NOTE: Only return 3 values.
	`;

	const { data: chatResponse, error: chatError } = await asyncTryCatch(client.chat.complete({
		model: "mistral-large-latest",
		messages: [
			{ role: "system", content: system_prompt },
			{ role: "user", content: input }
		],
	}));

	if (chatError !== null) {
		throw chatError;
	}
	if (chatResponse.choices === undefined || !chatResponse.choices[0].message.content) {
		throw new Error("Didn't get any response");
	}

	const botJsonStringOutput = chatResponse.choices[0].message.content.toString();

	let start = -1;
	let end = -1;

	for (let index = 0; index < botJsonStringOutput.length; ++index) {
		if (botJsonStringOutput[index] === "{" && start === -1) {
			start = index;
		}
		if (botJsonStringOutput[index] === "}") {
			end = index;
		}
	}

	if (start === -1 || end === -1) {
		return { message: botJsonStringOutput };
	}

	// here we are assuming that the bot has sent the required fields and not changed the names.
	try {
		return JSON.parse(botJsonStringOutput.substring(start, end + 1));
	} catch (error) {
		throw error as Error;
	}
}
