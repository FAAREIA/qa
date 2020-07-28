import {CLEAR_ERROR, REQUEST_FAILURE, SHOW_ERROR} from '../action/types';
import TError from '../../ts/type/Error';
import TErrorAction from '../../ts/type/ErrorAction';

const initialState = null;

const error = (state: TError = initialState, action: TErrorAction): TError => {
	const error = action.error;
	const type = action.type;

	switch(type) {
		case CLEAR_ERROR:
			return initialState;
		case REQUEST_FAILURE:
		case SHOW_ERROR:
			const message = `${error.name} - ${error.message}`;
			return message;
		default:
			return state;
	}
}

export default error;