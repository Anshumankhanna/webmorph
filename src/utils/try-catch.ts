import { Result } from "@/types/result";

export default function tryCatch<T, E = Error>(
	func: () => T
): Result<T, E> {
	try {
		const data = func();
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error as E };
	}
}