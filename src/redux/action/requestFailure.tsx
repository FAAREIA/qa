import {REQUEST_FAILURE} from './types';

const requestFailure = error => ({
	error,
	type: REQUEST_FAILURE
});

export default requestFailure;