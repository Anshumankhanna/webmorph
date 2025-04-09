// Use to resolve errors 

type Sucesss<T> = {
	data: T,
	error: null
};

type Failure<E> = {
	data: null,
	error: E
};

export type Result<T, E = Error> = Sucesss<T> | Failure<E>;