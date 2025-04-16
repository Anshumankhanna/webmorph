import { Result } from "@/types/result";

export default function tryCatch<T>(func: () => T): Result<T> {
	try {
		const data = func();
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error as Error };
	}
}
