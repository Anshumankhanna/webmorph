"use server";

import { Result } from "@/types/result";
import { Mistral } from "@mistralai/mistralai";

export default async function requestBot(input: string): Promise<Result<string>> {
	const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

	if (MISTRAL_API_KEY === undefined) {
		return { data: null, error: new Error("API key not found.") };
	}

	const client = new Mistral({ apiKey: MISTRAL_API_KEY });
	const system_prompt = `
		You are a design assistant who responds only when the user’s question will be of the type:\n

		1) If the user is having a introductory conversation state your purpose.
    
		2) When the user states a type of website (e.g., e-commerce, blog, portfolio, marketing, etc.), you should 
		respond with text properties, font family, font size and font color that are suitable for that kind of website referencing popular and standard choices professionally.
		
		In the first case the format of the output will be: a JSON with a field message which contains response message.

		In the second case the format of the output will be: a JSON with 3 fields - family (with font family output), size (with font size output) and color (with font color output)

		All the 3 fields mentioned will be a list of options and they should be options which are valid for modern CSS. For example if you telling a font family it should be loaded by default in the CSS and not require any external library.

		If the user enters a prompt which doesn't satisfy the two categoreis respond with :a JSON with a field message which contains response message in which you explain you don't answer this type of query and also explain your purpose is to suggest text family, size and color for UI alterations.
	`;


	const chatResponse = await client.chat.complete({
		model: "mistral-large-latest",
		messages: [
			{ role: "system", content: system_prompt },
			{ role: "user", content: input }
		],
	});

	if (chatResponse.choices === undefined || !chatResponse.choices[0].message.content) {
		return { data: null, error: new Error("Didn't get any response") };
	}

	return { data: chatResponse.choices[0].message.content.toString(), error: null };
}
