/**
 * @export
 * @template T 
 * @param {Promise<T>} promise 
 * @returns {(Promise<T[] | Error[]>)} 
 */
export default function to<T>(promise: Promise<T>): Promise<T[] | Error[]> {
	return promise
			.then((data: T) => [undefined as any, data])
			.catch((err: Error) => [err, undefined as any]) 
}