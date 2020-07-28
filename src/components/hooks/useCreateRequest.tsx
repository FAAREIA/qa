import IRequestCreate from '../../ts/interface/RequestCreate'

const useCreateRequest = ({endpoint, parameters, properties}: IRequestCreate) => {
	const params = Object.entries(parameters);
	const url = new URL(endpoint);

	for (const [key, value] of params) url.searchParams.set(key, value);

	return new Request(url.href, properties);
}

export default useCreateRequest;