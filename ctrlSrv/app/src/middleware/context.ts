import type { LoadInput, LoadOutput } from '@sveltejs/kit';

function success(): Promise<LoadOutput> {
	return Promise.resolve({
		status: 200
	});
}

function redirect(url: string): Promise<LoadOutput> {
	return Promise.resolve({
		status: 303,
		redirect: url
	});
}

export interface MiddlewareContext {
	success: typeof success;
	redirect: typeof redirect;
	context: LoadInput;
}

export function getContext(input: LoadInput): MiddlewareContext {
	return {
		success,
		redirect,
		context: input
	};
}

export default getContext;
