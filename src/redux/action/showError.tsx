import {SHOW_ERROR} from './types';

const showError = error => ({
	error,
	type: SHOW_ERROR
});

export default showError;