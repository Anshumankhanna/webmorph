// use this to resolve errors

export default async function tryCatch<T, E = Error>(
	promise: Promise<T>
) {
	try {
		const data = await promise;
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error as E };
	}
}